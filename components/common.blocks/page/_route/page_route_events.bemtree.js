block( 'page' ).mod( 'route', 'events' )( {
  route: ( { data: { api: { page, events } }, _urlFor } ) => [
    {
      elem: 'section',
      elemMods: {
        view: 'header',
        theme: 'dark',
      },
      back: 'index',
      header: page.title.ru,
      description: page.titleContent.ru,
      image: _urlFor( page.mainImage ).url(),
    },
    {
      elem: 'section',
      elemMods: { view: 'events' },
      events,
      limit: page.limit,
      hasLinkToAllEvents: false,
    },
  ],
} );
