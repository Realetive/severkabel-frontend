block( 'page' ).mod( 'route', 'contacts' )( {
  route: () => [
    {
      elem: 'section',
      elemMods: { view: 'contacts' },
    },
  ],
} );
