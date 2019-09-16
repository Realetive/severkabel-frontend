block( 'page' )
  .elem( 'header' )
  .replace()( node => ( {
    block: 'header',
    mix: { block: node.block, elem: node.elem },
  } ) );
