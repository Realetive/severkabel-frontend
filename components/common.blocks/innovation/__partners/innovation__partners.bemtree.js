block( 'innovation' ).elem( 'partners' )( {
  content: ( { _urlFor, config: { langs: [ lang ] } }, { partners } ) => [
    {
      block: 'heading',
      mods: {
        capitel: true,
        size: 'm',
      },
      content: lang === 'en' ? 'Partners' : 'Партнёры',
    },
    {
      block: 'list',
      mods: {
        type: 'unstyled',
        of: 'cooperation',
      },
      items: ( partners || [] ).map( image => ( {
        block: 'image',
        mods: { width: 'available' },
        alt: ( image.title || {} )[ lang ] || '',
        url: _urlFor( image ).url(),
      } ) ),
    },
  ],
} );
