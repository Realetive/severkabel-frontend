modules.define( 'modal', [ 'i-bem-dom' ], function ( provide, bemDom ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      visible: {
        true () {
          this

          // Apply the animation only at first opening, otherwise the animation will be played when block
          // initialized.
            .setMod( 'has-animation' )
            .__base.apply( this, arguments );
        },
      },
    },
  } ) );
} );
