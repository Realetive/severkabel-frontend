block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'projects' )( {
    content: ( node, { projects, limit = 1 } ) => {
      const firstEvents = projects.splice( 0, limit );

      return {
        elem: 'layout',
        elemMods: { width: 'tiny' },
        mix: { elem: 'projects' },
        content: {
          block: 'list',
          mods: {
            of: 'projects',
            view: 'preview',
          },
          mix: { block: node.block, elem: 'content' },
          projects: firstEvents,
        },
      };
    },
  } );
