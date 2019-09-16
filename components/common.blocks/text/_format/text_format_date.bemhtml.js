block( 'text' ).mod( 'format', 'date' )( {
  tag: 'time',
  addAttrs: ( node, ctx ) => ( {
    title: ctx.content,
  } ),
} );
