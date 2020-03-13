const policy = {
  heading: {
    en: 'Personal Data Processing Consent',
    ru: 'Согласие на обработку персональных данных',
  },
  user: {
    en: 'Being the Site User ',
    ru: 'Я, Пользователь Сайта ',
  },
  consent: {
    en:
      ', I give my consent to the processing of my personal data freely, by my own will and in my interest. This Consent has been given to the Site Administration - Northern Cable LLC. Being the Site User.',
    ru:
      ', даю согласие на обработку своих персональных данных свободно, своей волей и в своем интересе. Настоящее Согласие дано Администрации сайта — Обществу с ограниченной ответственностью «Северный кабель».',
  },
  receive: {
    en:
      'I agree to receive information by e-mail or phone from the Site Administration.',
    ru:
      'Я, Пользователь Сайта, выражаю согласие на получение информации по электронной почте или телефону от Администрации Сайта.',
  },
  purpose: {
    en: 'The purpose of processing personal data is:',
    ru: 'Целью обработки персональных данных являются:',
  },
  purposes: {
    en: [
      'being counselting,',
      'sending information by e-mail or SMS about services and / or events,',
      'receiving information about marketing events.',
    ],
    ru: [
      'консультирование,',
      'направление информации по электронной почте или СМС об услугах и / или мероприятиях,',
      'получение информации о маркетинговых событиях.',
    ],
  },
  scope: {
    en:
      'Scope of personal data processing: name/alias, phone number, email address.',
    ru:
      'Объем обработки персональных данных: имя/псевдоним, телефон, адрес электронной почты.',
  },
  actions: {
    en:
      'This consent is granted by me to perform actions with respect to my personal data that are necessary to achieve the above goals, including (without limitation) collection, systematization, accumulation, storage, clarification (update, change), use, depersonalization, blocking of personal data, as well as any other actions provided for by the current legislation of the Russian Federation.',
    ru:
      'Настоящее согласие предоставляется мной на осуществление действий в отношении моих персональных данных, которые необходимы для достижения указанных выше целей, включая (без ограничения) сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, блокирование персональных данных, а также осуществление любых иных действий, предусмотренных действующим законодательством Российской Федерации.',
  },
  thirdParties: {
    en:
      'Personal data is not transferred to third parties, except in cases stipulated by the current legislation of the Russian Federation.',
    ru:
      'Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных действующим законодательством Российской Федерации.',
  },
  period: {
    en:
      'This consent to the processing of personal data is valid for an indefinite period.',
    ru:
      'Настоящее согласие на обработку персональных данных действует в течение неопределенного срока.',
  },
  revoke: {
    en:
      'This consent to the processing of personal data may be revoked by me by sending a written request to the site administration.',
    ru:
      'Настоящее согласие на обработку персональных данных может быть отозвано мною путем направления письменного обращения администрации сайта.',
  },
  publicLink: {
    en: 'The personal data processing policy is available in the public domain at the link ',
    ru: 'Политика обработки персональных данных размещена в открытом публичном доступе по ссылке ',
  },
  store: {
    en: 'Personal data of Users is stored exclusively on electronic media and processed using automated systems, except for cases when non-automated processing of personal data is necessary in connection with the implementation of legal requirements.',
    ru: 'Персональные данные Пользователей хранятся исключительно на электронных носителях и обрабатываются с использованием автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка персональных данных необходима в связи с исполнением требований законодательства.',
  },
};

block( 'page' ).mod( 'route', 'policy' )( {
  route: ( {
    config: {
      langs: [ i18n ],
    },
  } ) => [
    { block: 'header' },
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      attrs: {
        style: 'padding-top: 3em; padding-bottom: 13em; max-width: 40em;',
      },
      content: [
        {
          block: 'heading',
          mods: { size: 'xxl' },
          content: policy.heading[ i18n ],
        },
        { tag: 'br' },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: [
            policy.user[ i18n ],
            {
              block: 'link',
              to: 'index',
              content: 'https://severkabel.ru/',
            },
            policy.consent[ i18n ],
          ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.receive[ i18n ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.purpose[ i18n ],
        },
        {
          block: 'list',
          items: policy.purposes[ i18n ],
        },
        {
          tag: 'br',
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.scope[ i18n ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.actions[ i18n ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.thirdParties[ i18n ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.period[ i18n ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.revoke[ i18n ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: [
            policy.publicLink[ i18n ],
            {
              block: 'link',
              to: 'policy',
              content: 'https://severkabel.ru/policy',
            },
            '.',
          ],
        },
        {
          block: 'paragraph',
          mods: { size: 'l' },
          content: policy.store[ i18n ],
        },
      ],
    },
  ],
} );
