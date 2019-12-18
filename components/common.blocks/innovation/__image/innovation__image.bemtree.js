block( 'innovation' ).elem( 'image' )(
  match( ( node, { url } ) => url ).replace()( ( { block, elem }, { image, url } ) => ( {
    block: 'link',
    mix: { block, elem },
    mods: { theme: 'inherit' },
    to: 'innovation',
    params: { innovation: url },
    content: {
      block: 'image',
      mods: { width: 'available' },
      url: image,
    },
  } ) ),
  content()( ( node, { image } ) => ( {
    block: 'image',
    mods: { width: 'available' },
    url: image,
  } ) )
)
