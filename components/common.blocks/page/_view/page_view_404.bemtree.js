block( 'page' ).mod( 'view', '404' )(
  def()( () => applyNext( { 'data.view': '' } ) ),
  content()( () => '404' ),
);
