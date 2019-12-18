block( 'page' ).mod( 'route', 'event' )( {
  route: ( { data: { api, params } } ) => {
    const eventAlias = params.event;
    const events = [];
    let event;

    api.page.forEach( item => {
      if ( item.slug && item.slug.current === eventAlias ) {
        event = item;
      } else {
        events.push( item );
      }
    } )

    return [
      { block: 'header' },
      {
        elem: 'section',
        elemMods: { view: 'event' },
        content: [
          {
            elem: 'layout',
            content: [
              {
                block: 'event',
                mods: { view: 'detail' },
                event,
                events,
              },
            ],
          },
        ],
      },
    ];
  },
} );
