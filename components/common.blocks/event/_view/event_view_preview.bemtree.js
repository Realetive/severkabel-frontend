block( 'event' ).mod( 'view', 'preview' )( {
  content: ( node, { event: { image, date, title, description, url, source } } ) => [
    {
      elem: 'image',
      image,
      url,
    },
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
    {
      elem: 'description',
      description,
    },
  ],
} )
