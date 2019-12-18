block( 'gallery' ).elem( 'item' )( {
  tag: 'figure',
  attrs: {
    itemscope: true,
    itemprop: 'associatedMedia',
    itemtype: 'http://schema.org/ImageObject',
  },
  js: ( node, { size, image, url, title } ) => ( {
    w: size.split( 'x' )[ 0 ],
    h: size.split( 'x' )[ 1 ],
    src: url,
    msrc: image,
    title,
  } ),
  content: ( node, { title, description, size, url, image, index } ) => [
    {
      elem: 'link',
      title,
      size,
      url,
      image,
      index,
    },
    { elem: 'description', description },
  ],
} );
