block( 'list' ).mod( 'of', 'projects' )( {
  addMods: { type: 'unstyled' },
  content: ( node, { projects } ) =>
    projects.map( project => ( {
      elem: 'item',
      content: {
        block: 'project',
        mods: { view: node.mods.view },
        project,
      },
    } ) ),
} );
