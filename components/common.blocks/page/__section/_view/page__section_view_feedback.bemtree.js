block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'feedback' )
  .content()( ( { block, config: { langs: [ lang ] } } ) => [
    {
      block: 'map',
      mix: { block, elem: 'map' },
      js: {
        coords: {
          lat: 59.9241328,
          lng: 30.2422875,
        },
        zoom: 14,
        tooltip: {
          title: lang === 'en'
            ? 'Saint Petersburg'
            : 'Санкт-Петербург',
          content: lang === 'en'
            ? '199004, Russia, St. Petersburg, Kozhevnaya line, 40'
            : '199004, Россия, Санкт-Петербург, Кожевная линия, 40',
        },
      },
    },
    {
      block: 'form',
      mods: { view: 'contacts' },
      mix: { block, elem: 'form' },
      subheading: lang === 'en' ? 'To contact us' : 'Связаться с нами',
      description: lang === 'en'
        ? 'Fill out the form and ask your question in the field “Your message”'
        : 'Заполните форму и задайте свой вопрос в графе «Ваше сообщение»',
    },
  ] );
