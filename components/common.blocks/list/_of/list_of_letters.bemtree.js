block( 'list' ).mod( 'of', 'letters' )( {
  content: ( { _urlFor, config: { langs: [ i18n ] } }, { letters } ) =>
    letters.map( ( letterOfThanks, index ) => [
      {
        elem: 'item',
        content: [
          {
            block: 'gallery',
            elem: 'item',
            index,
            title: letterOfThanks.title[ i18n ] || '',
            description: letterOfThanks.title[ i18n ] || '',
            size: letterOfThanks.asset._ref.split( '-' )[ 2 ],
            url: _urlFor( letterOfThanks.asset )
              .fit( 'crop' )
              .width( 1024 )
              .url(),
            image: _urlFor( letterOfThanks.asset )
              .fit( 'fill' )
              .width( 379 )
              .height( 568 )
              .url(),
          },
        ],
      },
    ] ),
} );
