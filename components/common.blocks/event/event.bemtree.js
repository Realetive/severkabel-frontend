block( 'event' )( {
  extend: ( node, { event } ) => ( {
    'ctx.event': event
      ? {
        image: node
          ._urlFor( event.mainImage )
          .height( 530 )
          .maxHeight( 530 )
          .url(),
        date: event.publishedAt || new Date().toISOString(),
        title: ( event.title || {} ).ru || '',
        description: ( event.introText || {} ).ru || '',
        url: event.source || ( event.slug || {} ).current || '',
        content: node._fromMarkdown( ( event.content || {} ).ru || '' ),
        source: event.source,
        sourceImage: node
          ._urlFor( event.sourceImage )
          .height( 35 )
          .maxHeight( 35 )
          .url(),
      }
      : {},
  } ),
} );
