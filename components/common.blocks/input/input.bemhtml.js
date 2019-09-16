block( 'input' )(
  match( ( node, { icon } ) => icon ).content()( ( node, { icon } ) => {
    icon.mods.size = icon.mods.size || node.mods.size;
    icon.mix = { block: node.block, elem: 'icon' };

    return [
      icon,
      applyNext(),
    ]
  } )
);
