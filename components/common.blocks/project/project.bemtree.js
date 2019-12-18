block( 'project' )( {
  extend: ( { _urlFor, _fromMarkdown, _, config: { langs: [ i18n ] } },
    { project: {
      publishedAt,
      slug,
      title,
      subTitle,
      content,
      indicator,
      mainImage,
      gallery,
      coords,
      mapAddress,
      mapTitle,
    } = {} } ) => ( {
    'ctx.project': {
      date: publishedAt || new Date().toISOString(),
      url: _.get( slug, 'current' ),
      title: _.get( title, i18n ),
      subTitle: _.get( subTitle, i18n ),
      content: _fromMarkdown( _.get( content, i18n ) ),
      image: _urlFor( mainImage )
        .height( 530 )
        .maxHeight( 530 )
        .url(),
      gallery,
      indicator: {
        description: _.get( indicator, `description.${ i18n }` ),
        index: _.get( indicator, `index.${ i18n }` ),
        label: _.get( indicator, `label.${ i18n }` ),
      },
      coords,
      mapTitle: _.get( mapTitle, i18n ),
      mapAddress: _.get( mapAddress, i18n ),
    },
  } ),
} );
