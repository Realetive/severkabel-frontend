block( 'navigation' )
  .mod( 'view', 'header' )
  .content()( ( { data: { params }, config: { langs: [ lang ] } } ) => [
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
        { val: 'lang', content: lang === 'en' ? '🇷🇺' : '🇬🇧' },
      ].map( ( { val, content } ) => ( {
        elem: 'item',
        elemMods: params._name === val ? {} : { type: 'link' },
        val,
        content:
        params._name === val
          ? content
          : {
            block: 'link',
            to: val,
            content,
          },
      } ) ),
    },
    { elem: 'phone' },
  ] );
