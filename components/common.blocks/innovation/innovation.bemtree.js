block( 'innovation' )( {
  extend: (
    {
      _urlFor,
      _fromMarkdown,
      _,
      config: {
        langs: [ i18n ],
      },
    },
    {
      innovation: {
        slug,
        title,
        subTitle,
        content,
        mainImage,
        gallery,
        partners,
      } = {},
    }
  ) => ( {
    'ctx.innovation': {
      url: _.get( slug, 'current' ),
      title: _.get( title, i18n ),
      subTitle: _.get( subTitle, i18n ),
      content: content && _fromMarkdown( _.get( content, i18n ) ),
      image:
        mainImage &&
        _urlFor( mainImage )
          .height( 530 )
          .width( 530 )
          .url(),
      gallery,
      partners,
    },
  } ),
} );
