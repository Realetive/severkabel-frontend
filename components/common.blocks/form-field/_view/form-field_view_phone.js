modules.define( 'form-field', [
  'loader_type_js',
  'i-bem-dom',
], ( provide, loader, bemDom, FormField ) => {
  provide( FormField.declMod( { modName: 'view', modVal: 'phone' }, {
    onSetMod: {
      js: {
        inited () {
          this.__base.apply( this, arguments );

          if ( typeof IMask === 'undefined' ) {
            loader( 'https://unpkg.com/imask@4.1.1/dist/imask.min.js', () => this._mask() );
          } else {
            this._mask();
          }
        },
      },
    },

    _mask () {
      // eslint-disable-next-line
      new IMask( this.getControl()._elem( 'control' ).domElem[0], {
        mask: '{8}(000)000-00-00',
      } );
    },
  } ) );
} );
