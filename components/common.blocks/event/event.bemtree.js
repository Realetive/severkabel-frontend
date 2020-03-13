block( 'event' )(
  extend()(
    (
      {
        _fromMarkdown,
        _urlFor,
        config: {
          langs: [ i18n ],
        },
      },
      { event }
    ) => ( {
      'ctx.event': event
        ? {
          image: _urlFor( event.mainImage )
            .height( 530 )
            .maxHeight( 530 )
            .url(),
          date: event.publishedAt || new Date().toISOString(),
          title: ( event.title || {} )[ i18n ] || '',
          description: ( event.introText || {} )[ i18n ] || '',
          url: event.source || ( event.slug || {} ).current || '',
          content: _fromMarkdown( ( event.content || {} )[ i18n ] || '' ),
          source: event.source,
          sourceImage: _urlFor( event.sourceImage )
            .height( 35 )
            .maxHeight( 35 )
            .url(),
          gallery: event.gallery,
        }
        : {},
    } )
  ),
  match( ( node, { event } ) => !event.title ).def()( '' )
);
