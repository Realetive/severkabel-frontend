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
          title:
          node.config.langs[ 0 ] === 'en'
            ? 'Saint Petersburg'
            : 'Санкт-Петербург',
          content:
          node.config.langs[ 0 ] === 'en'
            ? '199004, Russia, St. Petersburg, Kozhevnaya line, 40'
            : '199004, Россия, Санкт-Петербург, Кожевная линия, 40',
        },
      },
    },
    {
      block: 'form',
      mods: { view: 'contacts' },
      mix: { block: node.block, elem: 'form' },
      subheading:
      node.config.langs[ 0 ] === 'en' ? 'To contact us' : 'Связаться с нами',
      description:
      node.config.langs[ 0 ] === 'en'
        ? 'Fill out the form and ask your question in the field “Your message”'
        : 'Заполните форму и задайте свой вопрос в графе «Ваше сообщение»',
    },
  ] );
