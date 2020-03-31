block( 'innovation' ).elem( 'back' )( {
  content: ( { config: { langs: [ lang ] } } ) => ( {
    block: 'link',
    to: 'innovations',
    content: [
      {
        block: 'icon',
        mods: { symbol: 'arrow-left' },
      },
      lang === 'en' ? ' All innovations' : ' Все инновации',
    ],
  } ),
} );
