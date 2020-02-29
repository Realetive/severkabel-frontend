block( 'footer' ).elem( 'about' ).content()( node => {
  const now = new Date();
  const startYear = 2019;
  const year = now.getFullYear();
  const msg =
    node.config.langs[ 0 ] === 'en'
      ? 'All rights reserved'
      : 'Все права защищены';

  return { html: `${ startYear }${ year > startYear ? `–${ year }` : '' }&nbsp;©&nbsp;${ msg }` };
} );

