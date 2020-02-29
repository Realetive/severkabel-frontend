block( 'innovation' ).mod(
  'view',
  'detail'
)( {
  content: (
    node,
    { innovation: { title, subTitle, content, gallery, partners = [] } }
  ) => [
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
            gallery && {
              elem: 'gallery',
              gallery,
            },
          ],
        },
      ],
    },
    content && {
      elem: 'section',
      content: [
        {
          elem: 'aside',
          content:
            node.config.langs[ 0 ] === 'en'
              ? 'Description'
              : 'Описание',
        },
        {
          elem: 'main',
          content: [
            {
              elem: 'content',
              content,
            },
          ],
        },
      ],
    },
    partners.length
      ? {
        elem: 'partners',
        partners,
      }
      : '',
  ],
} );
