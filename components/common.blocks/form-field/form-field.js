/**
 * @module form-field
 */
modules.define( 'form-field', [ 'i-bem-dom' ],
  ( provide, bemDom, FormField ) => {
    /**
     * Field block
     */
    provide( bemDom.declBlock( FormField, /** @lends form-field.prototype */{

      onSetMod: {
        focused: {
          true () {
            this.__base.apply( this, arguments );

            this.hasMod( 'invalid' ) && this.getMessage().show();
          },
          '' () {
            this.__base.apply( this, arguments );

            this.getMessage() && this.getMessage().hide();
          },
        },
      },

      /**
       * debug override
       * @returns {Promise}
       */
      validate () {
        return this.__base.apply( this, arguments ).then( error => {
          error && console.warn( error ); // jshint ignore:line
          return error;
        } );
      },
    } ) );
  } );
