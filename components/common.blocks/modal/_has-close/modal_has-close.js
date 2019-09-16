modules.define( 'modal', ( provide, Modal ) => {
  provide( Modal.declMod( { modName: 'has-close', modVal: true }, {
    onSetMod: {
      js: {
        inited () {
          this.__base.apply( this, arguments );
        },
      },
    },
  } ) );
} );
