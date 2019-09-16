block( 'page' ).elem( 'section' ).elemMod( 'view', 'header' )( {
  content: ( { block }, { back, header, image, description } ) => [
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      content: [
        {
          elem: 'content',
          content: [
            back && {
              block: 'link',
              mix: { block, elem: 'back' },
              to: back,
              content: {
                block: 'icon',
                mods: { symbol: 'arrow-left' },
              },
            },
            header && {
              block: 'heading',
              mods: { size: 'xxl' },
              mix: { block, elem: 'heading', elemMods: { size: 'xl' } },
              content: header,
            },
            description && {
              block: 'paragraph',
              mix: { block, elem: 'description' },
              content: description,
            },
          ],
        },
        image && {
          elem: 'aside',
          content: {
            block: 'image',
            mods: { width: 'available' },
            mix: { block, elem: 'image' },
            url: image,
          },
        },
      ],
    },
  ],
} );

block( 'header' )( {
  addMods: {
    theme: 'dark',
    overlay: true,
  },
} );
