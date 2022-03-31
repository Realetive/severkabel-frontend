block( 'footer' ).elem( 'content' ).content()( node => [
  {
    block: 'navigation',
    mods: { view: 'footer' },
    mix: { block: node.block, elem: 'menu' },
  },
  {
    elem: 'contacts',
    content: {
      block: 'link',
      url: 'mailto:mail@nordgrid.ru',
      content: 'mail@nordgrid.ru',
    },
  },
] );
