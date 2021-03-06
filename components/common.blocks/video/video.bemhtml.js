block( 'video' )( {
  tag: 'video',

  addAttrs: (
    node,
    { poster, autoplay, loop, muted, preload, playsinline }
  ) => ( {
    poster,
    autoplay,
    loop,
    muted,
    preload,
    playsinline,
  } ),

  content: ( node, ctx ) => [
    ( ctx.source || [] ).map( src => ( { elem: 'source', src } ) ),
    ( ctx.track || [] ).map( track => ( { elem: 'track', track } ) ),
  ],

  appendContent: 'Your browser doesn\'t support HTML5 video tag.',
} );
