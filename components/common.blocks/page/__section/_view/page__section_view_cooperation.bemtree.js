block( 'page' ).elem( 'section' ).elemMod( 'view', 'cooperation' )
  .content()( node => [
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      content: [
        {
          block: 'heading',
          mods: {
            capitel: true,
            size: 'm',
          },
          content: node.config.langs[ 0 ] === 'en' ? 'Partnership' : 'Сотрудничество',
        },
        {
          block: 'list',
          mods: {
            type: 'unstyled',
            of: 'cooperation',
          },
          items: ( ( node.data.api.settings || {} ).cooperation || [] ).map( image => ( {
            block: 'image',
            mods: { width: 'available' },
            url: node._urlFor( image ).url(),
          } ) ),
        },
      ],
    },
  ] );
