modules.define( 'pagination', [ 'i-bem-dom' ], function ( provide, bemDom ) {
  provide(
    bemDom.declBlock( this.name, {
      onSetMod: {
        js: {
          inited () {
            [ 'prev', 'next' ].forEach( direction => {
              const elem = this._elem( {
                elem: 'link',
                modName: 'to',
                modVal: direction,
              } );

              this._domEvents( elem ).on( 'click', () => this.move( direction ) );
            } );

            /*
            this._prev = this._elem( { elem: 'link', modName: 'to', modVal: 'prev' } );
            this._next = this._elem( { elem: 'link', modName: 'to', modVal: 'next' } );

            this._domEvents( this._prev ).on( 'click', () => this.move( 'prev' ) );
            this._domEvents( this._next ).on( 'click', () => this.move( 'next' ) );
            */
          },
        },
      },

      move ( direction ) {
        [ 'indicator', 'page' ].forEach( item => {
          const elem = this.findChildElems( item );

          if ( elem && elem.size() ) {
            switch ( direction ) {
            case 'prev':
              elem
                .get( 0 )
                .domElem.insertAfter( elem.get( elem.size() - 1 ).domElem );
              break;
            case 'next':
              elem
                .get( elem.size() - 1 )
                .domElem.insertBefore( elem.get( 0 ).domElem );
              break;
            default:
              break;
            }
          }
        } );
      },

      /*
      prev() {
        this._indicators = this.findChildElems( 'indicator' );

        if( this._indicators && this._indicators.size() ) {
          this._indicators.get( 0 ).domElem.insertAfter( this._indicators.get( this._indicators.size() - 1 ).domElem );
        }

        this._pages = this.findChildElems( 'page' );

        if( this._pages || this._pages.size() ) {
          this._pages.get( 0 ).domElem.insertAfter( this._pages.get( this._pages.size() - 1 ).domElem );
        }
      },

      next() {
        this._indicators = this.findChildElems( 'indicator' );

        if( this._indicators && this._indicators.size() ) {
          this._indicators.get( this._indicators.size() - 1 ).domElem.insertBefore( this._indicators.get( 0 ).domElem );
        }

        this._pages = this.findChildElems( 'page' );

        if( this._pages || this._pages.size() ) {
          this._pages.get( this._pages.size() - 1 ).domElem.insertBefore( this._pages.get( 0 ).domElem );
        }
      },
      */
    } )
  );
} );
