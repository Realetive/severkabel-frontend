const fs = require( 'fs' );
const path = require( 'path' );

const app = require( 'express' )();
const nodemailer = require( 'nodemailer' );
const PrettyError = require( 'pretty-error' );
const akismet = require( 'akismet' ).client( {
  blog: 'https://severkabel.ru',
  apiKey: 'cae9fee89f38',
} );

const { __DEV__, port, staticFolder } = require( './config.js' );
const router = require( './router.js' );
const { render } = require( './render' );
const rebuild = require( './rebuild' );

const skip = ( _req, _res, next ) => next();

akismet.verifyKey( ( err, verified ) => {
  if ( verified ) {
    console.log( 'API key successfully verified.' );
  } else {
    console.log( 'Unable to verify API key.' );
  }
} );

/*
 * Server's middleware
 *
 *****************************************************************************/
app
  .disable( 'x-powered-by' )
  .enable( 'trust proxy' )
  .use( require( 'compression' )() ) // TODO: Add Brotli / Zopfli compression #2
  .use( __DEV__ ? require( 'tiny-lr' ).middleware( { app, dashboard: true } ) : skip )
  .use( require( 'serve-favicon' )( path.join( staticFolder, 'favicon.ico' ) ) )
  .use( require( 'serve-static' )( staticFolder ) )
  .use( require( 'body-parser' ).urlencoded( { extended: true } ) )
  .use( __DEV__ ? skip : require( 'connect-slashes' )() );

/*
 * Routing
 *
 *****************************************************************************/

app.post( '/sitemap', ( { body }, res ) => {
  console.log( 'body', body );
  console.log( 'res', res );

  return res.json( body );
} );

app.post( '*', ( { ip, protocol, hostname, originalUrl, body }, res ) => {
  const {
    name,
    phone,
    email,
    message,
    agreement,
  } = body;

  const akismetOptions = {
    user_ip: ip,
    permalink: `${ protocol }://${ hostname }${ originalUrl }`,
    comment_author: name,
    comment_content: message,
  };

  if ( name && phone && email && message && agreement ) {
    akismet.checkComment( akismetOptions, ( err, spam ) => {
      if ( spam ) {
        console.log( 'Spam caught.' );
        return res.redirect( 302, '/' );
      }
      console.log( 'Not spam' );
      nodemailer.createTestAccount( () => {
        const transporter = nodemailer.createTransport( {
          host: 'smtp.googlemail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'mail@nordgrid.ru',
            pass: 'ms6Vwice',
          },
        } );

        const mailOptions = {
          from: '"NordGrid" <mail@nordgrid.ru>',
          to: [ 'mail@nordgrid.ru' ],
          subject: `${ name } / ${ phone }`,
          replyTo: email,
          text: `${ name } / ${ phone } : ${ message }`,
          html: `
              <p><b>Имя:</b> ${ name }</p>
              <p><b>Телефон:</b> ${ phone }</p>
              <p><b>Почта:</b> ${ email }</p>
              <p><b>Сообщение:</b> ${ message }</p>
            `,
        };

        transporter.sendMail( mailOptions, error => {
          if ( error ) return console.log( error );
        } );

        return res.redirect( 302, '/thanks' );
      } );
    } );
  } else {
    return res.redirect( 302, '/' );
  }
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

    console.time( 'Render' );
    if ( route.page ) {
      const html = await render( req, res, route );

      console.timeEnd( 'Render' );

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
