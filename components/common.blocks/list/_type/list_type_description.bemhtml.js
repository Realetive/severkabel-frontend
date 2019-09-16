block( 'list' ).mod( 'type', 'description' )(
  tag()( 'dl' ),
  elem( 'item' )( tag()( 'div' ) ),
  elem( 'term' )( tag()( 'dt' ) ),
  elem( 'definition' )( tag()( 'dd' ) ),
);
