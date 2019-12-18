block( 'page' ).elem( 'section' ).elemMod( 'view', 'intro' )
  .content()( [
    { block: 'header' },
    { elem: 'intro' },
    { elem: 'promo-video' },
  ] );

block( 'logo' )( {
  addMods: {
    contrast: true,
  },
} );
