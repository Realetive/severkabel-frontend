block( 'video' ).elem( 'track' )( {
  tag: 'track',
  attrs: ( node, { track } ) => ( {
    kind: 'subtitles',
    src: track.src,
    srclang: track.lang,
    label: track.label,
  } ),
} );
