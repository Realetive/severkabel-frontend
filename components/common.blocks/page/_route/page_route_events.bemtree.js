block( 'page' ).mod( 'route', 'events' )( {
  route: ( { data: { api: { page, events } }, _urlFor, config: { langs: [ i18n ] } } ) => [
    {
      elem: 'section',
      elemMods: {
        view: 'header',
        theme: 'dark',
      },
      back: 'index',
      header: page.title[ i18n ],
      description: page.titleContent[ i18n ],
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
