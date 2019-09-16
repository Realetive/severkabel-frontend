block( 'page' ).content()( () => [
  applyNext(),
  {
    elem: 'js',
    content: {
      html: '(function() { [].forEach.call( document.querySelectorAll( "*" ), function( a ) { a.style.boxShadow = "inset 0 0 0 1px #" + ( ~~( Math.random() * ( 1<<24 ) ) ).toString( 16 ) } ); } )();',
    },
  },
] );
