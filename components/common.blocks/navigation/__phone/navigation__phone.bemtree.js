block( 'navigation' ).elem( 'phone' )( {
  replace: node => ( {
    block: 'link',
    mods: { theme: 'inherit' },
    mix: { block: node.block, elem: node.elem },
    url: `tel:${ node.data.api.settings.tel.ru }`,
    content: [
      {
        block: 'icon',
        mods: {
          symbol: 'phone',
          size: 'inherit',
        },
      },
      ' ',
      node.data.api.settings.tel.ru,
    ],
  } ),
} );
