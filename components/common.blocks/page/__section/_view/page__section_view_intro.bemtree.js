block( 'page' ).elem( 'section' ).elemMod( 'view', 'intro' )
  .content()( [
    { elem: 'intro' },
    { elem: 'promo-video' },
  ] );

block( 'header' )( {
  addMods: {
    theme: 'dark',
    overlay: true,
  },
} );

block( 'logo' )( {
  addMods: {
    contrast: true,
  },
} );
