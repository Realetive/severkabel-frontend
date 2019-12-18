block( 'pswp' )(
  addAttrs()( {
    tabindex: -1,
    role: 'dialog',
    'aria-hidden': 'true',
  } ),

  content()( [
    { elem: 'bg' },
    {
      elem: 'scroll-wrap',
      content: [
        {
          elem: 'container',
          content: [ ...Array( 3 ) ].map( () => ( { elem: 'item' } ) ),
        },
        {
          elem: 'ui',
          content: [
            {
              elem: 'top-bar',
              content: [
                { elem: 'counter' },
                {
                  elem: 'button',
                  elemMods: { action: 'close' },
                },

                // {
                //   elem: 'button',
                //   elemMods: { action: 'share' }
                // },
                {
                  elem: 'button',
                  elemMods: { action: 'fs' },
                },
                {
                  elem: 'button',
                  elemMods: { action: 'zoom' },
                },
                { elem: 'preloader' },
              ],
            },

            // {
            //   elem: 'share-modal',
            //   content: { elem: 'share-tooltip' },
            // },
            {
              elem: 'button',
              elemMods: { action: 'prev' },
            },
            {
              elem: 'button',
              elemMods: { action: 'next' },
            },
            {
              elem: 'caption',
              content: {
                cls: 'pswp__caption__center',
              },
            },
          ],
        },
      ],
    },
  ] ),

  elem( 'ui' )( { cls: 'pswp__ui--hidden' } ),

  elem( 'button' )( { tag: 'button' } ),

  elem( 'button' ).elemMod( 'action', 'close' )( {
    cls: 'pswp__button--close',
    addAttrs: {
      title: 'Close (Esc)',
    },
  } ),

  elem( 'button' ).elemMod( 'action', 'share' )( {
    cls: 'pswp__button--share',
    addAttrs: {
      title: 'Share',
    },
  } ),

  elem( 'button' ).elemMod( 'action', 'fs' )( {
    cls: 'pswp__button--fs',
    addAttrs: {
      title: 'Toggle fullscreen',
    },
  } ),

  elem( 'button' ).elemMod( 'action', 'zoom' )( {
    cls: 'pswp__button--zoom',
    addAttrs: {
      title: 'Zoom in/out',
    },
  } ),

  elem( 'button' ).elemMod( 'action', 'prev' )( {
    cls: 'pswp__button--arrow--left',
    addAttrs: {
      title: 'Previous (arrow left)',
    },
  } ),

  elem( 'button' ).elemMod( 'action', 'next' )( {
    cls: 'pswp__button--arrow--right',
    addAttrs: {
      title: 'Next (arrow right)',
    },
  } ),

  elem( 'share-modal' )( {
    cls: 'pswp__share-modal--hidden',
    addMix: { elem: 'single-tap' },
  } ),

  elem( 'preloader' )( {
    content: {
      cls: 'pswp__preloader__icn',
      content: {
        cls: 'pswp__preloader__cut',
        content: {
          cls: 'pswp__preloader__donut',
        },
      },
    },
  } ),
);
