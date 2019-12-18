block( 'page' ).mod( 'route', 'innovation' )( {
  route: ( { data: { api } } ) => [
    { block: 'header' },
    {
      elem: 'section',
      elemMods: { view: 'innovation' },
      content: [
        {
          elem: 'layout',
          content: [
            {
              block: 'innovation',
              mods: { view: 'detail' },
              innovation: api.page,
            },
          ],
        },
      ],
    },
  ],
} );
