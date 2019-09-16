block( 'logo' ).elem( 'icon' ).replace()( node => ( {
  block: 'image',
  mix: { block: node.block, elem: node.elem },
  url: node._urlFor( node.data.api.settings.logo ).url(),
} ) );
