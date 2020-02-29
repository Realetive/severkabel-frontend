block( 'event' ).elem( 'back' )( {
  content: ( { config: { langs: [ lang ] } } ) => ( {
    block: 'link',
    to: 'events',
    content: [
      // {
      //   block: 'icon',
      //   mods: { symbol: 'arrow-left' },
      // },
      lang === 'en' ? 'All events' : 'Все события',
    ],
  } ),
} );
