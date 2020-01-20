modules.define( 'event__gallery',
  [
    'i-bem-dom',
    'button',
  ],
  ( provide, bemDom, Button ) => {
    provide( bemDom.declElem( 'event', 'gallery', {
      onSetMod: {
        js: {
          inited () {
            const controls = this._elem( 'gallery-controls' ).findChildBlocks( Button );
            const gallery = this._elems( 'gallery-item' );

            gallery.forEach( ( item, index ) => {
              item.params.index = index
            } );

            let galleryIndex = 0;

            this._domEvents( controls ).on( 'click', event => {
              switch ( event.bemTarget.getMod( 'direction' ) ) {
              case 'next':
                galleryIndex = galleryIndex >= gallery.size()
                  ? 0
                  : galleryIndex + 1;
                break;
              case 'prev':
                galleryIndex = galleryIndex === 0
                  ? gallery.size() - 1
                  : galleryIndex - 1;
                break;
              }

              gallery.delMod( 'selected' );
              gallery.get( galleryIndex ).setMod( 'selected' );
              this.setImage( gallery.get( galleryIndex ).params.image );
            } );

            this._domEvents( gallery ).on( 'click', event => {
              gallery.delMod( 'selected' );
              event.bemTarget.setMod( 'selected' );
              galleryIndex = event.bemTarget.params.index;

              this.setImage( event.bemTarget.params.image )
            } );
          },
        },
      },

      setImage ( path ) {
        this._elem( 'gallery-image' ).domElem[ 0 ].setAttribute( 'src', path )
      },
    } ) );
  } );
