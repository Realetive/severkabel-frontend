block( 'navigation' )
  .mod( 'view', 'footer' )
  .content()(
    ( {
      data: { params },
      config: {
        langs: [ lang ],
      },
    } ) => ( {
      block: 'menu',
      mods: { view: 'footer' },
      val: params._name,
      content: [
        // { val: 'projects', content: lang === 'en' ? 'Projects' : 'Проекты' },
        { val: 'about', content: lang === 'en' ? 'About' : 'О компании' },
        {
          val: 'innovations',
          content: lang === 'en' ? 'Innovation' : 'Инновации',
        },
        { val: 'events', content: lang === 'en' ? 'Events' : 'События' },
        { val: 'contacts', content: lang === 'en' ? 'Contacts' : 'Контакты' },
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
    } )
  );
