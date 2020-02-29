block( 'page' )
  .elem( 'section' )
  .elemMod(
    'view',
    'contacts'
  )( {
    extend: ( {
      data: {
        api: { page },
      },
      _urlFor,
    } ) => ( {
      'ctx.image': _urlFor( page.mainImage ).url(),
    } ),
    content: ( {
      block,
      data: {
        api: { page },
      },
      config: {
        langs: [ i18n ],
      },
    } ) => [
      {
        block: 'map',
        attrs: { id: 'map' },
        mix: { block, elem: 'map' },
        js: {
          center: {
            lat: 59.9241328,
            lng: 30.2622875,
          },
          coords: {
            lat: 59.9241328,
            lng: 30.2422875,
          },
          zoom: 14,
          tooltip: {
            title: 'Санкт-Петербург',
            content: '199004, Россия, Санкт-Петербург, Кожевная линия, 40',
          },
        },
      },
      {
        elem: 'layout',
        content: [
          {
            elem: 'aside',
            content: [
              {
                block: 'form',
                mods: { view: 'contacts' },
                mix: { block, elem: 'form' },
                heading: i18n === 'en' ? 'Contacts' : 'Контакты',
                subheading: i18n === 'en' ? 'Write to us' : 'Напишите нам',
              },
              {
                elem: 'contacts',
                content: {
                  block: 'list',
                  mods: { of: 'contacts' },
                  contacts: [
                    { term: i18n === 'en' ? 'Working time' : 'Режим работы', definition: page.hours[ i18n ] },
                    { term: i18n === 'en' ? 'Address' : 'Адрес', definition: page.address[ i18n ] },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  } );
