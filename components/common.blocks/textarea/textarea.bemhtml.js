block( 'textarea' )( {
  addAttrs: ( node, { rows = 3 } ) => ( {
    rows,
  } ),
} );
