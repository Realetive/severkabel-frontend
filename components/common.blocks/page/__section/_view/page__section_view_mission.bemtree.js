block( 'page' ).elem( 'section' ).elemMod( 'view', 'mission' )( {
  content: ( { block, data: { api: { page: { mission } } }, config: { langs: [ i18n ] } } ) => [
    {
      elem: 'layout',
      content: [
        {
          elem: 'aside',
          content: mission.asideTitle[ i18n ],
        },
        {
          elem: 'content',
          content: [
            {
              block: 'heading',
              mods: { size: 'xl' },
              mix: { block, elem: 'heading', elemMods: { size: 'xl' } },
              content: mission.subTitle[ i18n ],
            },
          ],
        },
      ],
    },
    {
      elem: 'layout',
      mix: { elem: 'letters' },
      content: {
        block: 'list',
        mods: { of: 'letters' },
        letters: mission.gallery,
      },
    },
  ],
} );
