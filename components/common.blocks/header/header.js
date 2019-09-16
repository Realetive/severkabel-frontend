modules.define( 'header', [
  'i-bem-dom',
  'button',
  'navigation',
], function ( provide, bemDom, Button, Navigation ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited () {
          this._menuButton = this._elem( 'hamburger' ).findMixedBlock( Button );
          this._menu = this._elem( 'menu' );
          this._close = this._menu.findMixedBlock( { block: Navigation, modName: 'view', modVal: 'header' } )._elem( 'close' )

          this._menuButton._domEvents().on( 'click', () => {
            this._menu.setMod( 'visible', true )
          } );

          this._close._domEvents().on( 'click', () => {
            this._menu.setMod( 'visible', false )
          } );
        },
      },
    },
  } ) );
} );
