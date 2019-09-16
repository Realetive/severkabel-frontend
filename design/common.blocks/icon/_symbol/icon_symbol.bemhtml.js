block( 'icon' ).mod( 'symbol' )( {
  tag: 'svg',
  addJs: true,
  content: node => ( {
    tag: 'use',
    attrs: {
      'xlink:href': `icon_symbol.svg#icon_symbol_${ node.mods.symbol }`,
    },
  } ),
} );
