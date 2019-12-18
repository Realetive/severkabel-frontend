block( 'project' )
  .elem( 'description' )
  .content()( ( node, { description } ) => description );
