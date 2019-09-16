modules.define( 'form-field', [ 'vow' ], ( provide, Vow, FormField ) => {
  provide( FormField.declMod( { modName: 'validate', modVal: 'server' }, {
    onSetMod: {
      focused: {
        true () {
          this.__base.apply( this, arguments );
          this._val = this.getVal();
        },
        async '' () {
          this.__base.apply( this, arguments );
          this._newVal = this.getVal();

        // this.setStatus( null );
        },
      },
    },
  } ) );
} );
