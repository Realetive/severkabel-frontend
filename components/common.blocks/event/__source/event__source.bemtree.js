block( 'event' )
  .elem( 'source' )
  .replace()( ( { block, elem }, { sourceImage } ) => ( {
    block: 'image',
    mods: { width: 'available' },
    mix: { block, elem },
    url: sourceImage,
  } ) );
