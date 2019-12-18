modules.define( 'map', [
  'i-bem-dom',
  'loader_type_js',
], function ( provide, bemDom, loader ) {
  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited () {
          this._google = window.google;

          if ( typeof this._google === 'undefined' || typeof this._google.maps === 'undefined' ) {
            loader( 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDwpdjTBuzKu74C-_60HrgWZxFdgm_gdBY', () => {
              this._google = window.google;
              this.setMod( 'loaded', true );
            } )
          } else {
            this.setMod( 'loaded', true );
          }
        },
      },
      loaded: {
        true () {
          const {
            center,
            coords,
            zoom,
            tooltip: {
              title,
              content,
            },
          } = this.params;

          const map = new this._google.maps.Map( this.domElem[ 0 ], {
            center: center || coords,
            zoom,
            disableDefaultUI: true,
            draggable: false,
            styles: [
              {
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#f5f5f5',
                  },
                ],
              },
              {
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    color: '#f5f5f5',
                  },
                ],
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#bdbdbd',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#eeeeee',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#e5e5e5',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#ffffff',
                  },
                ],
              },
              {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#dadada',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#e5e5e5',
                  },
                ],
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#eeeeee',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#c9c9c9',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
            ],
          } );

          const infowindow = new this._google.maps.InfoWindow( {
            content: `
              <h3>${ title }</h3>
              <p>${ content }</p>
            `,
          } );

          const marker = new this._google.maps.Marker( {
            position: coords,
            map,
            title,
          } );

          infowindow.open( map, marker );
        },
      },
    },
  } ) );
} );
