block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'feedback' )
  .content()( node => [
    {
      block: 'map',
      mix: { block: node.block, elem: 'map' },
      js: {
        coords: {
          lat: 59.9241328,
          lng: 30.2422875,
        },
        zoom: 14,
        tooltip: {
          title: 'Санкт-Петербург',
          content: '199004, Россия, Санкт-Петербург, Кожевная линия, 40',
        },
      },
    },
    {
      block: 'form',
      mods: { view: 'contacts' },
      mix: { block: node.block, elem: 'form' },
      subheading: 'Связаться с нами',
      description: 'Заполните форму и задайте свой вопрос в графе «Ваше сообщение»',
    },
  ] );
