block( 'form-field' ).mod( 'view', 'name' )(
  def()( ( node, ctx ) => {
    ctx.directions = [ 'bottom-left' ];
    ctx.name = 'name';

    return applyNext();
  } ),
  addMods()( {
    type: 'input',
    required: true,
    message: 'text',
    theme: 'on-color',
  } ),
  addJs()( {
    required: { message: 'Это поле обязательно' },
  } ),
  content()( node => [
    {
      block: 'label',
      mods: { size: 's' },
      mix: { block: node.block, elem: 'label' },
      content: 'Ваше имя',
    },
    {
      block: 'input',
      mods: {
        width: 'available',
        size: 'l',
      },
      mix: { block: node.block, elem: 'control' },
      icon: {
        block: 'icon',
        mods: { symbol: 'user' },
      },
      placeholder: 'Ваше имя',
    },
  ] )
);
