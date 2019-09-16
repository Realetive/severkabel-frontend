block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'feedback' )
  .content()( node => [
    {
      block: 'map',
      mix: { block: node.block, elem: 'map' },
    },
    {
      block: 'form',
      mods: { view: 'contacts' },
      mix: { block: node.block, elem: 'form' },
      subheading: 'Связаться с нами',
      description: 'Заполните форму и задайте свой вопрос в графе «Сообщения»',
    },
  ] );
