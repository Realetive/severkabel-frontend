block( 'page' ).mod( 'route', 'contacts' )( {
  route: () => [
    { block: 'header' },
    {
      elem: 'section',
      elemMods: { view: 'contacts' },
    },
  ],
} );
