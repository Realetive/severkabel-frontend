block( 'list' ).mod( 'of', 'features' ).content()( ( node, ctx ) => ctx.items.map( item => ( {
  elem: 'item',
  content: [
    // {
    //   block: 'image',
    //   mods: { border: 'circle' },
    //   mix: { block: node.block, elem: 'image' },
    //   width: 250,
    //   height: 250,
    //   url: item.image
    // },
    {
      elem: 'description',
      content: item.desc,
    },
    {
      block: 'heading',
      mods: {
        align: 'center',
        size: 'm',
      },
      mix: { block: node.block, elem: 'heading' },
      content: item.title,
    },
  ],
} ) ) );
