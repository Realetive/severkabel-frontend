block( 'event' ).mod(
  'view',
  'detail'
)( {
  content: ( node, { event: { gallery, title, content, subTitle, image }, events } ) => [
    {
      elem: 'header',
      content: [
        {
          elem: 'main',
          content: [
            { elem: 'back' },
            {
              elem: 'title',
              title,
            },
            subTitle && {
              elem: 'subtitle',
              subTitle,
            },
          ],
        },
        {
          elem: 'aside',
          content: [
            gallery
              ? {
                elem: 'gallery',
                gallery,
              }
              : {
                elem: 'image',
                image,
              },
          ],
        },
      ],
    },
    {
      elem: 'content',
      content,
    },
    {
      elem: 'aside',
      content: {
        block: 'list',
        mods: {
          of: 'events',
          view: 'intro',
        },
        events: events.sort(
          ( a, b ) =>
            new Date( b.publishedAt || b._createdAt ) -
              new Date( a.publishedAt || a._createdAt )
        ),
      },
    },
  ],
} );
