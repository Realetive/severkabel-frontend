block( 'header' ).elem( 'logo' ).replace()( node => ( {
  block: 'logo',
  mix: { block: node.block, elem: node.elem },
} ) );
