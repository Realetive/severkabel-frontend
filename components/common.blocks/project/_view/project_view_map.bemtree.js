block( 'project' ).mod( 'view', 'map' )( {
  content: ( node, { project: { coords, mapTitle, mapAddress } } ) => ( {
    elem: 'map',
    attrs: {
      style: 'height: 50vh; width: 100%',
    },
    content: [
      {
        block: 'map',
        js: {
          coords,
          zoom: 6,
          tooltip: {
            title: mapTitle,
            content: mapAddress,
          },
        },
        attrs: {
          style: 'height: 50vh; width: 100%',
          id: 'map',
        },
      },
    ],
  } ),
} );
