block( 'page' ).elem( 'intro' ).content()( ( { block, data, _fromMarkdown, config: { langs: [ i18n ] } } ) => {
  const promo = ( data.api.page || {} ).promo || {};
  const title = _fromMarkdown( ( promo.promoTitle || {} )[ i18n ] );
  const description = _fromMarkdown( ( promo.promoContent || {} )[ i18n ] );
  const linkUrl = ( promo.promoLinkUrl || {} )[ i18n ];
  const linkTitle = ( promo.promoLinkTitle || {} )[ i18n ];

  return [
    {
      block: 'heading',
      mods: { capitel: true, size: 'xxl' },
      mix: { block, elem: 'intro-heading' },
      content: title[ 0 ].content,
    },
    {
      block: 'paragraph',
      mix: { block, elem: 'intro-description' },
      content: description[ 0 ].content,
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
