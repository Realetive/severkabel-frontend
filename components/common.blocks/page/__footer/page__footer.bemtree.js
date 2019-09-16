block( 'page' ).elem( 'footer' ).replace()( node => ( {
  block: 'footer',
  mods: { theme: 'dark' },
  mix: { block: node.block, elem: node.elem, elemMods: { theme: 'dark' } },
} ) );
