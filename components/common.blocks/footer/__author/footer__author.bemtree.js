block( 'footer' ).elem( 'author' ).content()( [
  { html: 'Сделано с ❤️' },
  { tag: 'br' },
  { html: 'в&nbsp;' },
  {
    block: 'link',
    mods: { view: 'text' },
    url: '#',
    content: 'Санкт-Петербурге',
  },
] );
