block( 'page' ).mod( 'route', 'innovations' )( {
  route: ( { data: { api: { page } }, _urlFor, config: { langs: [ i18n ] } } ) => [
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
      elemMods: { view: '2-columns' },
      title: ( page.subTitle || {} )[ i18n ],
      aside: ( page.asideTitle || {} )[ i18n ],
      description: ( page.content || {} )[ i18n ],
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
      innovations: page.innovations,
    },
  ],
} )

