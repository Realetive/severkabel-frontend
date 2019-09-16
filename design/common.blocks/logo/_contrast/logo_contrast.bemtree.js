block( 'logo' )
  .mod( 'contrast', true )
  .elem( 'icon' )( {
    replace: node => ( {
      block: 'image',
      mix: { block: node.block, elem: node.elem },
      // eslint-disable-next-line
      url: borschik.link('../../design/common.blocks/logo/_theme/logo_theme_dark.svg'),
    } ),
  } );
