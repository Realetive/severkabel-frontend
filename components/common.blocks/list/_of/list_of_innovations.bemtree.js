block( 'list' ).mod( 'of', 'innovations' )( {
  content: ( node, { innovations } ) => ( innovations || [] ).map( ( { fullWidth, innovation } ) => ( {
    elem: 'item',
    elemMods: { width: fullWidth ? 'available' : 'half' },
    content: {
      block: 'innovation',
      mods: {
        view: 'preview',
      },
      innovation,
    },
  } ) ),
} );
