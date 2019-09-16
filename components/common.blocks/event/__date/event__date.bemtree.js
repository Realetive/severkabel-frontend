block( 'event' ).elem( 'date' ).replace()( ( node, { date } ) => ( {
  block: 'text',
  mods: { format: 'date' },
  mix: { block: node.block, elem: node.elem },
  format: 'dd MMMM yyyy',
  date,
} ) );
