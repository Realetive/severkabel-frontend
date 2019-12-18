block( 'page' ).mod( 'route', 'project' )( {
  route: ( { data: { api, params } } ) => {
    const projectAlias = params.project;
    const projects = [];
    let project;

    api.page.forEach( item => {
      if ( item.slug && item.slug.current === projectAlias ) {
        project = item;
      } else {
        projects.push( item );
      }
    } )

    return [
      { block: 'header' },
      {
        elem: 'section',
        elemMods: { view: 'project' },
        content: [
          {
            elem: 'layout',
            content: [
              {
                block: 'project',
                mods: { view: 'detail' },
                project,
              },
            ],
          },
          {
            block: 'project',
            mods: { view: 'map' },
            project,
          },
        ],
      },
    ];
  },
} );
