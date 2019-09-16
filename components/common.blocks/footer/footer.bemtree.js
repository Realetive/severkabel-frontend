block( 'footer' ).content()( node => [
  {
    elem: 'content',
    elemMods: { theme: node.mods.theme },
    mix: { block: 'page', elem: 'layout' },
  },
  {
    elem: 'footer',
    elemMods: { theme: node.mods.theme },
    mix: { block: 'page', elem: 'layout' },
  },
] );

