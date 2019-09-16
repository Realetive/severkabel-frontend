block( 'page' ).mod( 'view', '500' )(
  def()( () => applyNext( { 'data.view': '' } ) ),
  content()( () => '500' ),
);
