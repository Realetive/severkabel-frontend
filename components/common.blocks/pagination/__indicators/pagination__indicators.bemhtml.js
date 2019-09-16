block( 'pagination' ).elem( 'indicators' )(
  tag()( 'ul' ),
  match( ( node, { items } ) => items && items.length > 1 ).content()( ( node, { items } ) => items.map( ( item, index ) => ( {
    elem: 'indicator',
    elemMods: { active: !index },
  } ) ) )
);
