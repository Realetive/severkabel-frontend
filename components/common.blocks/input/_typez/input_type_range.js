modules.define( 'input', ( provide, Input ) => {
  provide( Input.declMod( { modName: 'type', modVal: 'range' }, {
    onSetMod: {
      js: {
        inited () {
          this.__base.apply( this, arguments );

          // const output = this._elem('output-control').domElem;
          const output = this._elem( 'output' ).domElem;

          // const outputWidthDirty = output.css( 'width' );
          // const outputWidth = outputWidthDirty.substr( 0, outputWidthDirty.length - 2 );
          // const outputWidth = parseInt(outputWidthDirty);

          const control = this._elem( 'control' ).domElem;
          const min = control.attr( 'min' );
          const max = control.attr( 'max' );
          const widthDirty = control.css( 'width' );
          const width = widthDirty.substr( 0, widthDirty.length - 2 );

          // const width = parseInt(widthDirty);

          this.outputRender( output, min, max, width );

          const listener = () => {
            window.requestAnimationFrame( () => {
              this.outputRender( output, min, max, width );

              this._emit( 'change', this.getVal() );
            } );
          };

          this._domEvents( 'control' ).on( 'mousedown', () => {
            listener();
            this._domEvents( 'control' ).on( 'mousemove', listener );
          } );

          this._domEvents( 'control' ).on( 'mouseup', () => {
            this._domEvents( 'control' ).un( 'mousemove', listener );
          } );

          this._domEvents( 'control' ).on( 'change keydown', listener );

        // this._domEvents('output-control').on('change keydown', () => {
        //   const val = output.val();
        //   this.setVal( val );
        // } );
        },
      },
    },

    outputRender ( output, min, max, width ) {
      const val = this.getVal();

      output.val() !== val && output.val( val );

      // outputBox.val() !== val && outputBox.val( val );

      const track = ( val - min ) / ( max - min );
      const offset = track * ( width - 18 );

      output.css( 'transform', `translate( calc( ${ offset }px - 50% ) )` );
    },
  } ) );
} );
