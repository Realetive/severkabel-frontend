block( 'page' ).elem( 'section' ).elemMod( 'view', 'innovations' )( {
  content: ( node, { innovations } ) => [
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      content: {
        block: 'list',
        mods: {
          of: 'innovations',
          theme: 'dark',
        },
        innovations,
      },
    },
  ],
} );
