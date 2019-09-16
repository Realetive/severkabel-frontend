block( 'page' ).mod( 'route', 'innovations' )( {
  route: ( { data: { api: { page } }, _urlFor } ) => [
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
      elemMods: { view: '2-columns' },
      title: ( page.subTitle || {} ).ru,
      aside: ( page.asideTitle || {} ).ru,
      description: ( page.content || {} ).ru,
    },
    {
      elem: 'section',
      elemMods: { view: 'cooperation' },
    },
    {
      elem: 'section',
      elemMods: {
        view: 'innovations-heading',
        theme: 'dark',
      },
      content: {
        elem: 'layout',
        elemMods: { width: 'tiny' },
        content: {
          block: 'heading',
          mods: { size: 'l' },
          mix: { block, elem: 'heading', elemMods: { size: 'xl' } },
          content: 'Инновационные решения',
        },
      },
    },
    {
      elem: 'section',
      elemMods: { view: 'innovations' },
      innovations: page.gallery,
    },
  ],
} )
