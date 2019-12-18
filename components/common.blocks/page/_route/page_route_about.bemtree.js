block( 'page' ).mod( 'route', 'about' )( {
  route: ( { data: { api: { page } }, _urlFor, config: { langs: [ i18n ] } } ) => [
    {
      elem: 'section',
      elemMods: {
        view: 'header',
        theme: 'dark',
      },
      back: 'index',
      header: page.title[ i18n ],
      image: _urlFor( page.mainImage ).url(),
    },
    {
      elem: 'section',
      elemMods: { view: '2-columns' },
      title: ( page.subTitle || {} )[ i18n ],
      aside: ( page.asideTitle || {} )[ i18n ],
      description: ( page.content || {} )[ i18n ],
    },
    {
      elem: 'section',
      elemMods: { view: 'partners' },
    },
    {
      elem: 'section',
      elemMods: {
        view: 'mission',
        theme: 'dark',
      },
    },
  ],
} )

