block( 'innovation' ).elem( 'partners' )( {
  content: ( { _urlFor, config: { langs: [ i18n ] } }, { partners } ) => [
    {
      block: 'heading',
      mods: {
        capitel: true,
        size: 'm',
      },
      content: 'Партнёры',
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
        alt: ( image.title || {} )[ i18n ] || '',
        url: _urlFor( image ).url(),
      } ) ),
    },
  ],
} );
