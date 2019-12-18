block( 'navigation' ).elem( 'phone' )( {
  replace: ( { block, elem, data: { api: { settings: { tel } } }, config: { langs: [ i18n ] } } ) => ( {
    block: 'link',
    mods: { theme: 'inherit' },
    mix: { block, elem },
    url: `tel:${ tel[ i18n ] }`,
    content: [
      {
        block: 'icon',
        mods: {
          symbol: 'phone',
          size: 'inherit',
        },
      },
      ' ',
      tel[ i18n ],
    ],
  } ),
} );
