modules.define(
  'gallery',
  [ 'i-bem-dom', 'BEMHTML', 'pswp', 'pswp__ui' ],
  function (
    provide,
    bemDom,
    BEMHTML,
    PhotoSwipe,
    photoSwipeUIDefault,
  ) {
    provide(
      bemDom.declBlock( this.name, {
        onSetMod: {
          js: {
            inited () {
              const [ slider ] = bemDom.append(
                bemDom.scope,
                BEMHTML.apply( { block: 'pswp' } )
              );

              const items = this._elems( 'item' ).map( item => item.params );

              const initPhotoSwipe = index => {
                const gallery = new PhotoSwipe(
                  slider,
                  photoSwipeUIDefault,
                  items,
                  {
                    index,
                  }
                );

                gallery.init();
              };

              this._domEvents( 'link' ).on( 'click', e => {
                e.preventDefault();
                initPhotoSwipe( e.bemTarget.params.index );
              } );
            },
          },
        },
      } )
    );
  }
);
