modules.define( 'modal__close', [ 'i-bem-dom' ], ( provide, bemDom ) => {
  provide( bemDom.declElem( 'modal', 'close', {
    onSetMod: {
      js: {
        inited () {
          this._domEvents().on( 'click', () => {
            this._block().setMod( 'visible', false )
          } )
        },
      },
    },
  } ) );
} );
