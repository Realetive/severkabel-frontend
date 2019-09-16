block( 'event' )
  .mod( 'view', 'intro' )
  .content()( ( node, { event: { date, title, url, source, sourceImage } } ) => [
    {
      elem: 'date',
      date,
    },
    {
      elem: 'title',
      title,
      url,
      source,
    },
    source && {
      elem: 'source',
      sourceImage,
    },
  ] );
