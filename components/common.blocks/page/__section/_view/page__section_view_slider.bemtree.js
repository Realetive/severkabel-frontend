block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'slider' )
  .content()( ( { _urlFor, _blocksToHtml, block, elemMods, data, config: { langs: [ i18n ] } } ) => {
    const slides = ( ( data.api.page || {} ).gallery || [] ).map( slide => ( {
      heading: slide.title[ i18n ],
      content: _blocksToHtml( slide.description[ i18n ] ).html,
      url: ( slide.link || {} )[ i18n ],
      image: _urlFor( slide )
        .width( 520 )
        .height( 520 )
        .maxWidth( 520 )
        .maxHeight( 520 )
        .url(),
    } ) );

    const [ slide ] = slides;

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
          mix: { block, elem: 'heading', elemMods: { size: 'xxl' } },
          content: slide.heading,
        },
      },
      {
        elem: 'slider',
        mix: { elem: elemMods.layout ? 'layout' : '' },
        js: { slides },
        content: [
          {
            elem: 'slider-content',
            content: [
              slide.heading && {
                block: 'heading',
                mods: { size: 'l' },
                mix: { block, elem: 'title' },
                content: slide.heading,
              },
              slide.content && {
                elem: 'description',
                content: { html: slide.content },
              },
              slide.url && {
                block: 'button',
                mods: {
                  type: 'link',
                  view: 'pseudo',
                  size: 'l',
                },
                mix: { block, elem: 'action' },
                url: slide.url,
                text: [
                  i18n === 'en'
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
                mix: { block, elem: 'navigation' },
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
