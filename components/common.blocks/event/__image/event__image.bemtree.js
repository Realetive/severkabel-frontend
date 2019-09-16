block( 'event' ).elem( 'image' ).content()( ( node, { image } ) => ( {
  block: 'image',
  mods: { width: 'available' },
  url: image,
} ) );
