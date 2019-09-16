block( 'header' )
  .elem( 'menu' )
  .replace()( node => ( {
    block: 'navigation',
    mods: { view: 'header' },
    mix: { block: node.block, elem: node.elem },
  } ) );
