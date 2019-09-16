block( 'event' ).mod( 'view', 'detail' )( {
  content: ( node, { event: { image, title, content }, events } ) => [
    {
      elem: 'header',
      content: [
        { elem: 'back' },
        {
          elem: 'image',
          image,
        },
      ],
    },
    {
      elem: 'title',
      title,
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
        events,
      },
    },
  ],
} )
