modules.define( 'pagination__link', [ 'i-bem-dom' ], ( provide, bemDom ) => {
  provide(
    bemDom.declElem( 'pagination', 'link', {
      onSetMod: {
        js: {
          inited () {
            this._domEvents().on( 'click', () => {
              // console.log( '{ to: this.getMod( \'to\' ) }', { to: this.getMod( 'to' ) } );
              this._emit( 'pagination', { to: this.getMod( 'to' ) } );
            } );
          },
        },
      },
    } )
  );
} );
