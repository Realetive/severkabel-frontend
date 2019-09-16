block( 'form-field' ).elem( 'label' )( {
  replace: ( { block, elem }, { content } ) => ( {
    block: 'label',
    mix: { block, elem },
    content,
  } ),
} );
