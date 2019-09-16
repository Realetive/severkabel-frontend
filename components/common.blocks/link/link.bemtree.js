block( 'link' )(
  match( ( node, { to } ) => to ).def()( ( { data }, ctx ) => {
    try {
      const url = data.params.urlTo( ctx.to, ctx.params );

      ctx.url = url === data.url.pathname ? '' : url
    } catch ( error ) {
      console.error( error );
    }

    return applyNext();
  } )
)
