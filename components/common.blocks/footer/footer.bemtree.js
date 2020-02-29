block( 'footer' ).content()( node => [
  {
    elem: 'content',
    elemMods: { theme: node.mods.theme },
    mix: { block: 'page', elem: 'layout', elemMods: { width: 'tiny' } },
  },
  {
    elem: 'footer',
    elemMods: { theme: node.mods.theme },
    mix: { block: 'page', elem: 'layout', elemMods: { width: 'tiny' } },
  },
] );

