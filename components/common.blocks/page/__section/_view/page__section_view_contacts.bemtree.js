block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'contacts' )( {
    extend: ( { data: { api: { page } }, _urlFor } ) => ( {
      'ctx.image': _urlFor( page.mainImage ).url(),
    } ),
    content: ( { data: { api: { page } }, block } ) => [
      {
        block: 'map',
        attrs: { id: 'map' },
        mix: { block, elem: 'map' },
        js: true,
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
                heading: 'Контакты',
                subheading: 'Напишите нам',
              },
              {
                elem: 'contacts',
                content: {
                  block: 'list',
                  mods: { of: 'contacts' },
                  contacts: [
                    { term: 'Режим работы', definition: page.hours.ru },
                    { term: 'Адрес', definition: page.address.ru },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  } );
