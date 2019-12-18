block( 'header' ).elem( 'contacts' ).replace()( ( { block, elem, data: { api: { settings: { tel } } }, config: { langs: [ i18n ] } } ) => ( {
  block: 'button',
  mods: {
    type: 'link',
    view: 'plain',
    size: 'xl',
  },
  mix: { block, elem },
  url: `tel:${ tel[ i18n ] }`,
  icon: {
    block: 'icon',
    mods: { symbol: 'phone' },
  },
  text: ` ${ tel[ i18n ] }`,
} ) );
