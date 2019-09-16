block( 'pagination' ).elem( 'link' ).elemMod( 'to', 'next' )(
  replace()( node => ( {
    block: 'button',
    mods: { size: node.elemMods.size },
    mix: { block: node.block, elem: node.elem, elemMods: node.elemMods, js: true },
    icon: {
      block: 'icon',
      mods: {
        symbol: 'chevron-right',
        theme: 'inherit',
      },
    },
  } ) )
);
