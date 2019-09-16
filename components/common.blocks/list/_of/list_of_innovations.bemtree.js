block( 'list' ).mod( 'of', 'innovations' )( {
  content: ( node, { innovations } ) => innovations.map( ( { title, subTitle, asset: image } ) => ( {
    elem: 'item',
    elemMods: {
      image: !!image,
    },
    attrs: image && {
      style: `background-image: url(${ node._urlFor( image ).url() })`,
    },
    content: [
      {
        block: 'heading',
        mods: { size: 'm' },
        content: [
          title.ru,
          subTitle && {
            block: 'paragraph',
            mix: { block: node.block, elem: 'subheading' },
            content: subTitle.ru,
          },
        ],
      },
    ],
  } ) ),
} );
