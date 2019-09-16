block( 'page' ).mod( 'route', 'about' )( {
  route: ( { data: { api: { page } }, _urlFor } ) => [
    {
      elem: 'section',
      elemMods: {
        view: 'header',
        theme: 'dark',
      },
      back: 'index',
      header: page.title.ru,
      image: _urlFor( page.mainImage ).url(),
    },
    {
      elem: 'section',
      elemMods: { view: '2-columns' },
      title: ( page.subTitle || {} ).ru,
      aside: ( page.asideTitle || {} ).ru,
      description: ( page.content || {} ).ru,
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

