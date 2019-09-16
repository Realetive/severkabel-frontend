const fs = require( 'fs' );
const path = require( 'path' );

const nodeEval = require( 'node-eval' );
const MobileDetect = require( 'mobile-detect' );

const config = require( './config' );

const useCache = config.cacheTTL > 0;

let cache = {};

function evalFile ( filename ) {
  return nodeEval( fs.readFileSync( filename, 'utf8' ), filename );
}

function getTemplates ( bundle = 'index', level ) {
  const bundleName = `${ bundle }-${ level }`;
  const pathToBundle = path.resolve( 'bundles', bundleName );

  return {
    BEMTREE: evalFile( path.resolve( pathToBundle, `${ bundleName }.bemtree.js` ) )
      .BEMTREE,
    BEMHTML: evalFile( path.resolve( pathToBundle, `${ bundleName }.bemhtml.js` ) )
      .BEMHTML,
  };
}

const render = ( req, res, data = {}, context ) => {
  if ( config.__DEV__ && req.query.json || req.xhr ) {
    return res.json( data );
  }

  const cacheKey = req.originalUrl + ( context ? JSON.stringify( context ) : '' );

  const cached = cache[ cacheKey ];

  if (
    useCache &&
    cached &&
    new Date() - cached.timestamp < config.cacheTTL &&
    !req.query.dropCache
  ) {
    return res.send( cached.html );
  }

  const md = new MobileDetect( req.headers[ 'user-agent' ] );
  const level = md.mobile() || md.tablet() ? 'touch' : 'desktop';

  const bemtreeCtx = {
    level,
    block: 'root',
    config,
    data: {
      ...data,
      url: req._parsedUrl,
    },
    context,
  };

  const templates = getTemplates( data.page, level );

  let bemjson;

  try {
    // eslint-disable-next-line prefer-reflect
    bemjson = templates.BEMTREE.apply( bemtreeCtx );
  } catch ( err ) {
    console.error( 'BEMTREE error', err.stack );
    console.trace( 'server stack' );
    return res.sendStatus( 500 );
  }

  if ( config.__DEV__ && req.query.bemjson ) {
    return res.json( bemjson );
  }

  let html;

  try {
    // eslint-disable-next-line prefer-reflect
    html = templates.BEMHTML.apply( bemjson );
  } catch ( err ) {
    console.error( 'BEMHTML error', err.stack );
    return res.sendStatus( 500 );
  }

  useCache &&
    ( cache[ cacheKey ] = {
      timestamp: new Date(),
      html,
    } );

  return res.send( html );
};

function dropCache () {
  cache = {};
}

module.exports = {
  render,
  dropCache,
};
