block( 'navigation' )
  .mod( 'view', 'header' )
  .content()( ( { data: { params }, config: { langs: [ lang ] } } ) => {
    const iconTo = {
      ru: `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 60 30">
        <clipPath id="a">
          <path d="M0 0v30h60V0z"/>
        </clipPath>
        <clipPath id="b">
          <path d="M30 15h30v15zv15H0zH0V0zV0h30z"/>
        </clipPath>
        <g clip-path="url(#a)">
          <path fill="#012169" d="M0 0v30h60V0z"/>
          <path stroke="#fff" stroke-width="6" d="M0 0l60 30m0-30L0 30"/>
          <path stroke="#C8102E" stroke-width="4" d="M0 0l60 30m0-30L0 30" clip-path="url(#b)"/>
          <path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60"/>
          <path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60"/>
        </g>
      </svg>`,
      en: `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 1200 600">
        <path fill="#fff" d="M1200 0H0v300h1200V0z"/>
        <path fill="#D52B1E" d="M1200 300H0v300h1200V300z"/>
        <path fill="#0039A6" d="M1200 200H0v200h1200V200z"/>
      </svg>`,
    }

    return [
      {
        block: 'menu',
        mods: {
          view: 'header',
          size: 'l',
        },
        val: params._name,
        content: [
          // { val: 'projects', content: lang === 'en' ? 'Projects' : 'Проекты' },
          { val: 'about', content: lang === 'en' ? 'About us' : 'О компании' },
          {
            val: 'innovations',
            content: lang === 'en' ? 'Innovation' : 'Инновации',
          },
          { val: 'events', content: lang === 'en' ? 'Events' : 'События' },
          { val: 'contacts', content: lang === 'en' ? 'Contacts' : 'Контакты' },
          {
            val: 'lang',
            title: lang === 'en' ? 'Перейти на русскую версию' : 'Go to english',
            content: { html: iconTo[ lang ] },
          },
        ].map( ( { val, content } ) => ( {
          elem: 'item',
          elemMods: params._name === val ? {} : { type: 'link' },
          val,
          content:
          params._name === val
            ? content
            : {
              block: 'link',
              mix: { block: 'menu', elem: 'link' },
              to: val,
              content,
            },
        } ) ),
      },
      { elem: 'phone' },
    ]
  } );
