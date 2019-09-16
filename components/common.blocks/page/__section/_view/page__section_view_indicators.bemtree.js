block( 'page' ).elem( 'section' ).elemMod( 'view', 'indicators' )
  .content()( node => [
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
          { block: node.block, elem: 'heading', elemMods: { size: 'xxl' } },
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
          items: node.data.api.page.indicators.map( ( { index, label, description } ) => [
            {
              elem: 'term',
              content: [
                index && {
                  elem: 'index',
                  content: index.ru,
                },
                label && {
                  elem: 'label',
                  content: label.ru,
                },
              ],
            },
            description && {
              elem: 'definition',
              content: description.ru,
            },
          ] ),
        },
      },
    },
  ] );
