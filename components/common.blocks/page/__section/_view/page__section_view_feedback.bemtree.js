block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', 'feedback' )
  .content()( ( { block, config: { langs: [ lang ] } } ) => [
    {
      block: 'map',
      mix: { block, elem: 'map' },
      js: {
        coords: {
          lat: 59.904144,
          lng: 30.275264,
        },
        zoom: 14,
        tooltip: {
          title: lang === 'en'
            ? 'Saint Petersburg'
            : 'Санкт-Петербург',
          content: lang === 'en'
            ? '190020, Russia, St. Petersburg, Narvsky Pr. 14, building 2, lit. 6H, Office 7'
            : '190020, Россия, Санкт-Петербург, пр. Нарвский, дом 14, корпус 2, литер А, пом. 6Н, Офис 7',
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

// 190020, г. Санкт- Петербург, 
// , 