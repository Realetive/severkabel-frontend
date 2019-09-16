block( 'page' )(
  content()( () => [
    { elem: 'header' },
    apply( 'route' ),
    { elem: 'footer' },
  ] ),
);
