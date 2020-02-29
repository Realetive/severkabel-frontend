block( 'footer' )
  .elem( 'policy' )
  .content()( node => [
    {
      block: 'link',
      mods: { view: 'text' },
      to: 'policy',
      content:
      node.config.langs[ 0 ] === 'en'
        ? 'Personal Data Processing Policy'
        : 'Политика обработки персональных данных',
    },
  ] );
