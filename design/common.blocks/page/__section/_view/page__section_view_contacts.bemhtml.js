block( 'page' ).elem( 'section' ).elemMod( 'view', 'contacts' )( {
  addAttrs: ( node, ctx ) => ( {
    style: `background-image: url(${ ctx.image })`,
  } ),
} );
