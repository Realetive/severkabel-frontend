block( 'list' ).mod( 'of', 'contacts' )( {
  addMods: { type: 'description' },
  content: ( node, { contacts } ) => contacts.map( ( { term, definition } ) => ( {
    elem: 'item',
    content: [
      {
        elem: 'term',
        content: term,
      },
      {
        elem: 'definition',
        content: definition,
      },
    ],
  } ) ),
} );
