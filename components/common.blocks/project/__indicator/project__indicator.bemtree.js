block( 'project' ).elem( 'indicator' )( {
  content: ( node, { indicator: { index, label, description } } ) => [
    {
      elem: 'indicator-index',
      content: [
        index,
        {
          elem: 'indicator-label',
          content: label,
        },
      ],
    },
    {
      elem: 'indicator-description',
      content: description,
    },
  ],
} );
