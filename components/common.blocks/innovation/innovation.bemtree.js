block( 'innovation' )( {
  extend: ( { _urlFor, _fromMarkdown, _ },
    { innovation: {
      slug,
      title,
      subTitle,
      content,
      mainImage,
      gallery,
      partners,
    } = {} } ) => ( {
    'ctx.innovation': {
      url: _.get( slug, 'current' ),
      title: _.get( title, 'ru' ),
      subTitle: _.get( subTitle, 'ru' ),
      content: content && _fromMarkdown( _.get( content, 'ru' ) ),
      image: mainImage && _urlFor( mainImage )
        .height( 530 )
        .width( 530 )
        .url(),
      gallery,
      partners,
    },
  } ),
} );
