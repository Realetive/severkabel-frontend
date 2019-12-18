block( 'innovation' ).mod( 'view', 'preview' )( {
  addMods: ( node, { innovation: { image } } ) => ( {
    'no-image': !image,
  } ),
  content: ( node, { innovation: { title, subTitle, image, url } } ) => [
    {
      elem: 'content',
      content: [
        {
          elem: 'title',
          title,
          url,
        },
        subTitle && {
          elem: 'subtitle',
          content: subTitle,
        },
      ],
    },
    image && {
      elem: 'image',
      image,
      url,
    },
  ],
} );
