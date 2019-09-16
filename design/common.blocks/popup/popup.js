modules.define( 'popup',
  [ 'i-bem-dom', 'objects' ],
  ( provide, bemDom, objects, Popup ) => {
    provide( bemDom.declBlock( Popup, {
      _getDefaultParams () {
        return objects.extend(
          this.__base(),
          {
            mainOffset: 5,
            viewportOffset: 10,
          }
        );
      },
    } ) );
  } );
