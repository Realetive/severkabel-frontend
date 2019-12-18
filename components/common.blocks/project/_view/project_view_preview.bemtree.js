block( 'project' ).mod( 'view', 'preview' )( {
  extend: ( { _urlFor, config: { langs: [ i18n ] } }, { project } ) => ( {
    'ctx.project': project
      ? {
        ...applyNext(),
        title: ( project.title || {} )[ i18n ] || '',
        url: project.source || ( project.slug || {} ).current || '',
        image: _urlFor( project.mainImage )
          .width( 490 )
          .height( 636 )
          .url(),
      }
      : {},
  } ),
  content: ( node, { project: { image, title, url } } ) => [
    {
      elem: 'image',
      image,
      url,
    },
    {
      elem: 'title',
      title,
      url,
    },
  ],
} );
