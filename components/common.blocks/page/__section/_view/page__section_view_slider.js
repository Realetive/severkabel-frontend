modules.define(
  'page__section',
  [ 'BEMHTML', 'i-bem-dom', 'pagination', 'pagination__link', 'button' ],
  ( provide, BEMHTML, bemDom, Pagination, PaginationLink, Button, PageSection ) => {
    provide(
      PageSection.declMod(
        { modName: 'view', modVal: 'slider' },
        {
          onSetMod: {
            js: {
              inited () {
                const slider = this._elem( 'slider' );
                const { slides } = slider.params;
                const paginationLinks = this.findMixedBlock(
                  Pagination
                ).findChildElems( PaginationLink );
                let currentSlideIndex = 0;

                this._events( paginationLinks ).on( 'pagination', event => {
                  const to = event.bemTarget.getMod( 'to' );

                  switch ( to ) {
                  case 'prev':
                    if ( currentSlideIndex <= 0 ) {
                      currentSlideIndex = slides.length - 1;
                    } else {
                      currentSlideIndex -= 1;
                    }
                    break;
                  case 'next':
                    if ( currentSlideIndex >= slides.length - 1 ) {
                      currentSlideIndex = 0;
                    } else {
                      currentSlideIndex += 1;
                    }
                    break;

                  default:
                    break;
                  }

                  const slide = slides[ currentSlideIndex ];

                  this._elem( 'action' ).findMixedBlock( Button ).setUrl( slide.url );
                  bemDom.update( this._elem( 'heading' ).domElem, slide.heading );
                  bemDom.update( this._elem( 'title' ).domElem, slide.heading );
                  bemDom.update(
                    this._elem( 'description' ).domElem,
                    slide.content
                  );
                  bemDom.replace(
                    this._elem( 'photo' ).domElem,
                    BEMHTML.apply( {
                      block: 'image',
                      mods: { width: 'available' },
                      mix: { block: 'page', elem: 'photo' },
                      url: slide.image,
                    } )
                  );
                } );
              },
            },
          },
        }
      )
    );
  }
);
