block( 'gallery' ).elem( 'description' )( {
  tag: 'figcaption',
  attrs: {
    itemprop: 'caption description',
  },
  content: ( node, { description } ) => description,
} );
