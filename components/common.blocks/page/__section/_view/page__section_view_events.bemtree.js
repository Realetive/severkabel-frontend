block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'events' )
  .content()( ( node, { events, limit = 1, hasLinkToAllEvents = true } ) => {
    const firstEvents = events
      .sort(
        ( a, b ) => new Date( b.publishedAt || b._createdAt ) - new Date( a.publishedAt || a._createdAt )
      )
      .splice( 0, limit );

    return [
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
          mix: { block: node.block, elem: 'heading', elemMods: { size: 'xxl' } },
          content: node.config.langs[ 0 ] === 'en' ? 'Events' : 'События',
        },
      },
      {
        elem: 'layout',
        elemMods: { width: 'tiny' },
        mix: { elem: 'events' },
        content: [
          {
            block: 'heading',
            mods: {
              capitel: true,
              size: 'm',
            },
            mix: { block: node.block, elem: 'heading' },
            content: node.config.langs[ 0 ] === 'en' ? 'Events' : 'События',
          },
          {
            block: 'list',
            mods: {
              of: 'events',
              view: 'preview',
            },
            mix: { block: node.block, elem: 'content' },
            events: firstEvents,
          },
          {
            elem: 'aside',
            content: [
              {
                block: 'list',
                mods: {
                  of: 'events',
                  view: 'intro',
                },
                events,
              },
              hasLinkToAllEvents && {
                block: 'link',
                mix: { block: node.block, elem: 'all-events' },
                to: 'events',
                content: [
                  node.config.langs[ 0 ] === 'en' ? 'All events' : 'Все события ',
                  {
                    block: 'icon',
                    mods: { symbol: 'arrow-right' },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  } );
