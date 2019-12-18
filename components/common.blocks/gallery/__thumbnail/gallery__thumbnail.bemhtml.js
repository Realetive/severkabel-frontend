block( 'gallery' ).elem( 'thumbnail' )( {
  replace: ( { block, elem }, { image, title } ) => ( {
    block: 'image',
    mods: { width: 'available' },
    mix: { block, elem },
    url: image,
    alt: title,
    title,
    attrs: { itemprop: 'thumbnail' },
  } ),
} );
