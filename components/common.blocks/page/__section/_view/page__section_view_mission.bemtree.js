block( 'page' ).elem( 'section' ).elemMod( 'view', 'mission' )( {
  content: ( { block, data } ) => [
    {
      elem: 'layout',
      content: [
        {
          elem: 'aside',
          content: data.api.page.mission.asideTitle.ru,
        },
        {
          elem: 'content',
          content: [
            {
              block: 'heading',
              mods: { size: 'xl' },
              mix: { block, elem: 'heading', elemMods: { size: 'xl' } },
              content: data.api.page.mission.subTitle.ru,
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
        letters: data.api.page.mission.gallery,
      },
    },
  ],
} );
