modules.define( 'form', [ 'i-bem-dom' ], function ( provide, bemDom ) {
  provide( bemDom.declBlock( this.name, {
    _onSubmit () {},
  } ) );
} );
