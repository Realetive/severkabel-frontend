block( 'project' ).mod( 'view', 'detail' )( {
  content: ( node, { project: { title, subTitle, content, indicator, gallery } } ) => [
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
            {
              elem: 'indicator',
              indicator,
            },
          ],
        },
        {
          elem: 'aside',
          content: [
            {
              elem: 'gallery',
              gallery,
            },
          ],
        },
      ],
    },
    {
      elem: 'section',
      content: [
        {
          elem: 'aside',
          content: 'О проекте',
        },
        {
          elem: 'main',
          content: [
            {
              elem: 'subtitle',
              content: subTitle,
            },
            {
              elem: 'content',
              content,
            },
          ],
        },
      ],
    },
  ],
} );
