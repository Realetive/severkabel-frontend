block( 'list' ).mod( 'of', 'events' )( {
  addMods: { type: 'unstyled' },
  content: ( node, { events } ) => events.map( event => ( {
    elem: 'item',
    content: {
      block: 'event',
      mods: { view: node.mods.view },
      event,
    },
  } ) ),
} );
