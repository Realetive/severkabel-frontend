block( 'list' ).mod( 'of', 'index-slider' )(
  addMix()( [
    { block: 'pagination', elem: 'pages' },
  ] ),
  content()( ( node, { slides } ) =>
    slides.map( ( slide, index ) => ( {
      elem: 'item',
      elemMods: { active: index === 1 },
      mix: [ { block: 'pagination', elem: 'page' } ],
      content: [
        {
          elem: 'content',
          mix: { block: 'page', elem: 'layout' },
          content: [
            slide.heading && {
              block: 'heading',
              mods: { size: 'l' },
              mix: { block: node.block, elem: 'heading' },
              content: slide.heading,
            },
            slide.content && {
              block: 'paragraph',
              mix: { block: node.block, elem: 'description' },
              content: { html: slide.content },
            },
            slide.url && {
              block: 'button',
              mods: {
                type: 'link',
                view: 'pseudo',
                size: 'l',
              },
              mix: { block: node.block, elem: 'action' },
              url: slide.url,
              text: [
                node.config.langs[ 0 ] === 'en'
                  ? 'More '
                  : 'Подробнее ',
                {
                  block: 'icon',
                  mods: { symbol: 'arrow-right' },
                },
              ],
            },
          ],
        },
        slide.image && {
          block: 'image',
          mods: { width: 'available' },
          mix: { block: node.block, elem: 'image' },
          url: slide.image,
        },
      ],
    } ) )
  )
);
