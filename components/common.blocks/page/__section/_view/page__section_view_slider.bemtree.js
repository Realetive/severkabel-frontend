block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'slider' )
  .content()( node => {
    const slides = ( ( node.data.api.page || {} ).gallery || [] ).map( slide => ( {
      heading: slide.title.ru,
      content: slide.description.ru,
      url: ( slide.link || {} ).ru,
      image: node._urlFor( slide ).url(),
    } ) );

    const slide = slides[ 0 ];

    return [
      {
        elem: 'layout',
        content: {
          block: 'heading',
          mods: {
            capitel: true,
            stroke: true,
            size: 'l',
            theme: 'dark',
          },
          mix: { block: node.block, elem: 'heading', elemMods: { size: 'xxl' } },
          content: slide.heading,
        },
      },
      {
        elem: 'slider',
        mix: { elem: node.elemMods.layout ? 'layout' : '' },
        js: { slides },
        content: [
          {
            elem: 'slider-content',
            content: [
              slide.heading && {
                block: 'heading',
                mods: { size: 'l' },
                mix: { block: node.block, elem: 'title' },
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
                  'Подробнее ',
                  {
                    block: 'icon',
                    mods: { symbol: 'arrow-right' },
                  },
                ],
              },
            ],
          },
          slide.image && {
            elem: 'image',
            content: [
              {
                block: 'image',
                mods: { width: 'available' },
                mix: { block: 'page', elem: 'photo' },
                url: slide.image,
              },
              {
                block: 'pagination',
                elem: 'navigation',
                mix: { block: node.block, elem: 'navigation' },
                content: [
                  {
                    elem: 'link',
                    elemMods: {
                      to: 'prev',
                      size: 'l',
                    },
                    js: true,
                  },
                  {
                    elem: 'link',
                    elemMods: {
                      to: 'next',
                      size: 'l',
                    },
                    js: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  } );
