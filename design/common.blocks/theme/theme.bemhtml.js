// block( '*' )( {
//   def ( node ) {
//     node.mods.size = node.mods.size || 'm';
//     node.mods.theme = node.mods.theme || node.defaultTheme || 'light';
//     node.elemMods.theme = node.elemMods.theme || node.defaultTheme || 'light';
//     return [
//       applyNext( {
//         defaultTheme: node.elemMods.theme || node.mods.theme || node.defaultTheme,
//       } ),
//     ].join( '' );
//   },
// } );

block( '*' )( {
  def ( { mods, elem, elemMods, prevTheme } ) {
    const themes = [ 'light', 'dark' ];

    mods.theme = mods.theme || prevTheme || themes[ 0 ];
    mods.size = mods.size || 'm';

    prevTheme = elem
      ? themes.includes( elemMods.theme )
        ? elemMods.theme
        : prevTheme
      : themes.includes( mods.theme )
        ? mods.theme
        : prevTheme;

    return [
      applyNext( { prevTheme } ),
    ].join( '' );
  },
} );
