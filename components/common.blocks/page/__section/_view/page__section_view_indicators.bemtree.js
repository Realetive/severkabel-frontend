block( 'page' ).elem( 'section' ).elemMod( 'view', 'indicators' )
  .content()( ( { block, config: { langs: [ i18n ], data } } ) => [
    {
      elem: 'layout',
      content: {
        block: 'heading',
        mods: {
          capitel: true,
          stroke: true,
          size: 'l',
          theme: 'dark',
        },
        mix: [
          { block, elem: 'heading', elemMods: { size: 'xxl' } },
        ],
        content: 'Показатели',
      },
    },
    {
      elem: 'section',
      elemMods: { theme: 'dark' },
      content: {
        elem: 'layout',
        content: {
          block: 'list',
          mods: {
            type: 'description',
            of: 'indicators',
          },
          items: data.api.page.indicators.map( ( { index, label, description } ) => [
            {
              elem: 'term',
              content: [
                index && {
                  elem: 'index',
                  content: index[ i18n ],
                },
                label && {
                  elem: 'label',
                  content: label[ i18n ],
                },
              ],
            },
            description && {
              elem: 'definition',
              content: description[ i18n ],
            },
          ] ),
        },
      },
    },
  ] );
