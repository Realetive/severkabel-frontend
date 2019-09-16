block( 'navigation' ).mod( 'view', 'header' ).content()( ( { data: { params } } ) => [
  { elem: 'close' },
  {
    block: 'menu',
    mods: {
      view: 'header',
      size: 'l',
    },
    val: params._name,
    content: [
    // { val: 'projects', content: 'Проекты' },
      { val: 'about', content: 'О компании' },
      { val: 'innovations', content: 'Инновации' },
      { val: 'events', content: 'События' },
      { val: 'contacts', content: 'Контакты' },
    ].map( ( { val, content } ) => ( {
      elem: 'item',
      elemMods: params._name === val ? {} : { type: 'link' },
      val,
      content: params._name === val
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
