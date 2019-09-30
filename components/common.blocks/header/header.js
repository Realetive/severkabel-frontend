modules.define( 'header', [ 'i-bem-dom', 'button' ], function (
  provide,
  bemDom,
  Button
) {
  provide(
    bemDom.declBlock( this.name, {
      onSetMod: {
        js: {
          inited () {
            this._menuButton = this._elem( 'hamburger' ).findMixedBlock( Button );
            this._menu = this._elem( 'menu' );

            this._menuButton._domEvents().on( 'click', () => {
              this._elem( 'hamburger' ).toggleMod( 'active' );
              this._menu.toggleMod( 'visible' );
            } );
          },
        },
      },
    } )
  );
} );
