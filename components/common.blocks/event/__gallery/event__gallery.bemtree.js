block( 'event' ).elem( 'gallery' )( {
  addJs: true,
  content: (
    {
      block,
      _urlFor,
      _,
      config: {
        langs: [ i18n ],
      },
    },
    { gallery = [] }
  ) => [
    {
      block: 'image',
      mods: { width: 'available' },
      mix: { block, elem: 'gallery-image' },
      url:
        gallery[ 0 ] &&
        _urlFor( gallery[ 0 ] )
          .width( 990 )
          .height( 812 )
          .url(),
    },
    {
      elem: 'gallery-section',
      content: [
        {
          elem: 'gallery-controls',
          content: [
            {
              block: 'button',
              mods: {
                direction: 'prev',
                view: 'plain',
                size: 'l',
              },
              icon: {
                block: 'icon',
                mods: {
                  symbol: 'chevron-left',
                  size: 'l',
                },
              },
            },
            {
              block: 'button',
              mods: {
                direction: 'next',
                view: 'plain',
                size: 'l',
              },
              icon: {
                block: 'icon',
                mods: {
                  symbol: 'chevron-right',
                  size: 'l',
                },
              },
            },
          ],
        },
        {
          elem: 'gallery-list',
          content: gallery.map( ( image, index ) => ( {
            block: 'image',
            mods: { width: 'available' },
            mix: {
              block,
              elem: 'gallery-item',
              elemMods: { selected: !index },
              js: {
                image: _urlFor( image )
                  .width( 990 )
                  .height( 812 )
                  .url(),
              },
            },
            attrs: { tabIndex: 0 },
            title: _.get( image, `title.${ i18n }` ),
            alt: _.get( image, `description.${ i18n }` ),
            url: _urlFor( image )
              .width( 270 )
              .height( 210 )
              .url(),
          } ) ),
        },
      ],
    },
  ],
} );
