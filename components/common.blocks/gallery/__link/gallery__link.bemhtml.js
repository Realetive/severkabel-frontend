block( 'gallery' ).elem( 'link' )( {
  replace: ( { block, elem }, { title, image, url, index } ) => ( {
    block: 'link',
    mix: { block, elem, js: { index } },
    url,
    target: '_blank',
    attrs: { itemprop: 'contentUrl' },
    title,
    content: {
      block,
      elem: 'thumbnail',
      image,
      title,
    },
  } ),
} );
