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
      url: 'mailto:mail@severkabel.ru',
      content: 'mail@severkabel.ru',
    },
  },
] );
