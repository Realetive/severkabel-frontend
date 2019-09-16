const fs = require( 'fs' );
const path = require( 'path' );

const app = require( 'express' )();
const nodemailer = require( 'nodemailer' );
const PrettyError = require( 'pretty-error' );

const { __DEV__, port, sessionSecret, staticFolder } = require( './config.js' );
const router = require( './router.js' );
const { render } = require( './render' );
const rebuild = require( './rebuild' );

const skip = ( _req, _res, next ) => next();

/*
 * Server's middleware
 *
 *****************************************************************************/
app
  .disable( 'x-powered-by' )
  .enable( 'trust proxy' )
  .use( require( 'compression' )() ) // TODO: Add Brotli / Zopfli compression #2
  // .use( __DEV__ ? require( 'tiny-lr' ).middleware( { app, dashboard: true } ) : skip )
  .use( require( 'serve-favicon' )( path.join( staticFolder, 'favicon.ico' ) ) )
  .use( require( 'serve-static' )( staticFolder ) )
  .use( require( 'cookie-parser' )() )
  .use( require( 'body-parser' ).urlencoded( { extended: true } ) )
  .use(
    require( 'express-session' )( {
      resave: true,
      saveUninitialized: true,
      secret: sessionSecret,
    } )
  )
  .use( __DEV__ ? skip : require( 'connect-slashes' )() );

/*
 * Routing
 *
 *****************************************************************************/

app.post( '*', ( { body }, res ) => {
  nodemailer.createTestAccount( () => {
    const transporter = nodemailer.createTransport( {
      host: 'smtp.googlemail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'realetive@gmail.com',
        pass: 'Oksana-travel-ruler-nevatrip',
      },
    } );

    const mailOptions = {
      from: '"SeverKabel" <realetive@gmail.com>',
      to: [ 'tatiana@severkabel.ru', 'severkabel@romanganin.ru' ],
      subject: `${ body.name } / ${ body.phone }`,
      replyTo: body.email,
      text: `${ body.name } / ${ body.phone } : ${ body.message }`,
      html: `
        <p><b>Имя:</b> ${ body.name }</p>
        <p><b>Телефон:</b> ${ body.phone }</p>
        <p><b>Почта:</b> ${ body.email }</p>
        <p><b>Сообщение:</b> ${ body.message }</p>
      `,
    };

    transporter.sendMail( mailOptions, error => {
      if ( error ) return console.log( error );
    } );

    return res.redirect( 302, '/thanks' );
  } );
} );

app.all( '*', async ( req, res, next ) => {
  try {
    const route = await router.resolve( {
      pathname: req.path,
      query: req.query || {},
      method: req.method,
    } );

    if ( route.redirect ) {
      res.redirect( route.status || 302, route.redirect );

      return;
    }

    res.status( route.status || 200 );

    if ( route.page ) {
      const html = await render( req, res, route );

      return html;
    }

    return res.json( route );
  } catch ( error ) {
    // Prepare for error handler
    next( error );
  }
} );

/*
 * Error handler
 *
 *****************************************************************************/
const pe = new PrettyError();

pe.skipNodeFiles();
pe.skipPackage( 'express' );

app.use( ( err, req, res ) => {
  console.error( pe.render( err ) );
  res.status( err.status || 500 );
  const html = render( req, res, {}, { page: 'error', api: { error: err } } );

  return res.send( html );
} );

if ( __DEV__ ) rebuild( app );

/*
 * Start server
 *
 *****************************************************************************/
const isSocket = isNaN( port );

isSocket && fs.existsSync( port ) && fs.unlinkSync( port );
app.listen( port, function () {
  isSocket && fs.chmod( port, '0777' );
  const host = this.address().address;

  console.info(
    `Server is now listening on http://${
      host === '::' ? 'localhost' : host
    }:${ port }`
  );
} );
