block( 'event' ).mod( 'view', 'preview' )( {
  content: ( node, { event: { image, date, title, description, url } } ) => [
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
    },
    {
      elem: 'description',
      description,
    },
  ],
} )
