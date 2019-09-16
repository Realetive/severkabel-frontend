block( 'list' ).mod( 'of', 'letters' )( {
  addMods: { type: 'unstyled' },
  content: ( { _urlFor }, { letters } ) =>
    letters.map( letterOfThanks => [
      {
        elem: 'item',
        content: [
          {
            // block: 'image',
            // mods: { width: 'available' },
            elem: 'image',
            attrs: {
              style: `background-image: url( ${ _urlFor( letterOfThanks.asset ).url() } )`,
            },
          },
          {
            elem: 'description',
            content: letterOfThanks.title.ru,
          },
        ],
      },
    ] ),
} );
