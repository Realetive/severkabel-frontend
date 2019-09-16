block( 'header' ).elem( 'contacts' ).replace()( node => ( {
  block: 'button',
  mods: {
    type: 'link',
    view: 'plain',
    size: 'xl',
  },
  mix: { block: node.block, elem: node.elem },
  url: `tel:${ node.data.api.settings.tel.ru }`,
  icon: {
    block: 'icon',
    mods: { symbol: 'phone' },
  },
  text: ` ${ node.data.api.settings.tel.ru }`,
} ) );
