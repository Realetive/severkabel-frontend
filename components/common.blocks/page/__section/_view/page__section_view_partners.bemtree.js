block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'partners' )
  .content()( node => [
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      content: [
        {
          elem: 'heading',
          content: [
            {
              block: 'heading',
              mods: {
                capitel: true,
                size: 'm',
              },
              content: node.config.langs[ 0 ] === 'en' ? 'Customers' : 'Клиенты',
            },
            {
              block: 'link',
              url: '/about#letters',
              content: [
                node.config.langs[ 0 ] === 'en'
                  ? 'Feedback and thanks '
                  : 'Отзывы и благодарности ',
                {
                  block: 'icon',
                  mods: { symbol: 'arrow-right' },
                },
              ],
            },
          ],
        },
        {
          block: 'list',
          mods: {
            type: 'unstyled',
            of: 'clients',
          },
          items: ( ( node.data.api.settings || {} ).clients || [] ).map( client =>
            client.url
              ? {
                block: 'link',
                url: client.url,
                target: '_blank',
                attrs: {
                  rel: 'noreferrer noopener',
                },
                content: {
                  block: 'image',
                  title: client.title,
                  mods: { width: 'available' },
                  url: node._urlFor( client ).url(),
                },
              }
              : {
                block: 'image',
                title: client.title,
                mods: { width: 'available' },
                url: node._urlFor( client ).url(),
              }
          ),
        },
      ],
    },
  ] );
