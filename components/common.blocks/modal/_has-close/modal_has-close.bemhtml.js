block( 'modal' ).mod( 'has-close', true )(
  elem( 'content' ).content()( node => [
    {
      block: node.block,
      elem: 'close',
    },
    applyNext(),
  ] )
);
