block( 'page' ).mod( 'route', 'projects' )( {
  route: ( {
    data: {
      api: { page, projects },
    },
    config: { langs: [ i18n ] },
  } ) => [
    {
      elem: 'section',
      elemMods: {
        view: 'header',
        theme: 'dark',
      },
      back: 'index',
      header: page.title[ i18n ],
      description: page.titleContent[ i18n ],
    },
    {
      elem: 'section',
      elemMods: { view: 'projects' },
      projects,
      limit: page.limit,
      hasLinkToAllEvents: false,
    },
  ],
} );
