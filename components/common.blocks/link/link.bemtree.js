block( 'link' )(
  match( ( node, { to } ) => to ).def()( ( { data }, ctx ) => {
    try {
      const url = data.params.urlTo( ctx.to, ctx.params );

      if ( url === data.url.pathname ) {
        ctx.attrs = {
          'aria-current': 'location',
        }
      } else {
        ctx.url = url
      }

    } catch ( error ) {
      console.error( error );
    }

    return applyNext();
  } )
)
