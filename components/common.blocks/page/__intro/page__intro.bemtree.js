block( 'page' ).elem( 'intro' ).content()( ( { block, data, _blocksToHtml, config: { langs: [ i18n ] } } ) => {
  const promo = ( data.api.page || {} ).promo || {};
  const title = _blocksToHtml( ( promo.promoTitle || {} )[ i18n ] );
  const description = _blocksToHtml( ( promo.promoContent || {} )[ i18n ] );
  const linkUrl = ( promo.promoLinkUrl || {} )[ i18n ];
  const linkTitle = ( promo.promoLinkTitle || {} )[ i18n ];

  return [
    {
      block: 'heading',
      mods: { capitel: true, size: 'xxl' },
      mix: { block, elem: 'intro-heading' },
      content: title,
    },
    {
      block: 'paragraph',
      mix: { block, elem: 'intro-description' },
      content: description,
    },
    {
      elem: 'intro-action',
      content: {
        block: 'button',
        mods: {
          type: 'link',
          view: 'pseudo',
          size: 'xl',
        },
        url: linkUrl,
        text: [
          `${ linkTitle } `,
          {
            block: 'icon',
            mods: { symbol: 'arrow-right' },
          },
        ],
      },
    },
  ]
}
);
