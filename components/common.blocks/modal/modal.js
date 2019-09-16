modules.define( 'modal', [
  'i-bem-dom',
  'page',
], function ( provide, bemDom, Page ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      visible () {
        this.__base.apply( this, arguments );
        const page = this.findParentBlock( Page );

        page.setMod( 'no-scroll', this.hasMod( 'visible' ) );
      },
    },
  } ) );
} );
