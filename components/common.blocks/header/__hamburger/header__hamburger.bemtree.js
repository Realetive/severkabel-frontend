block( 'header' ).elem( 'hamburger' ).replace()( node => ( {
  block: 'button',
  mods: {
    view: 'plain',
    size: 'xl',
  },
  mix: { block: node.block, elem: node.elem },
  icon: {
    block: 'icon',
    mods: { symbol: 'menu' },
  },
} ) );
