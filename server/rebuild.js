'use strict';

const fs = require( 'fs' );
const path = require( 'path' );

const _ = require( 'lodash' );
const tinyLr = require( 'tiny-lr' );
const notifier = require( 'node-notifier' );
const make = require( 'enb' ).make;
const watch = require( 'chokidar' ).watch;

const config = require( './config' );

const rootDir = path.join( __dirname, '..' );
const watchOpts = {
  persistent: true,
  ignoreInitial: true,
  ignored: '.**/*.DS_Store',
};

// get bundles list
const bundlesDir = path.join( rootDir, 'bundles/' );
const bundles = fs
  .readdirSync( bundlesDir )
  .filter( file => fs.statSync( path.join( bundlesDir, file ) ).isDirectory() );

// enb make
function rebuild ( /* event, file */ ) {
  // TODO: get target via file extention
  // TODO: get current bundle via websocket
  // NOTE: use `[path.join('desktop.bundles', 'index')]` to build specific target

  /* console.time( `Rebuild: ${ file }` ); */
  return make( { logLevel: 'warn' } )
    .then( () => {
      /* console.timeEnd( `Rebuild: ${ file }` ); */
      notifier.notify( {
        title: config.host,
        message: 'Build finished',
      } );
    } )
    .fail( err => {
      notifier.notify( {
        title: 'Build failed',
        message: err,
      } );
    } );
}

const debouncedRebuild = _.debounce( rebuild, 30, {
  leading: true,
  trailing: true,
} );

!config.automake ||
  watch(
    [
      path.join( rootDir, 'components', '*.blocks', '**' ),
      path.join( rootDir, 'design', '*.blocks', '**' ),
    ].concat(
      bundles.map( bundle => path.join( bundlesDir, `${ bundle }.bemdecl.js` ) )
    ),
    watchOpts
  ).on( 'all', debouncedRebuild );

// livereload
!config.livereload ||
  watch(
    [
      path.join( rootDir, 'static', '**', '*.min.*' ),
      path.join( bundlesDir, '*', '*.bemtree.js' ),
    ].concat(
      bundles.map( bundle => path.join( bundlesDir, `${ bundle }.bemhtml.js` ) )
    ),
    watchOpts
  ).on( 'all', ( event, file ) => {
    tinyLr.changed( file );
  } );

module.exports = function ( app ) {
  if ( !app ) return;
};
