block( 'footer' ).elem( 'about' ).content()( () => {
  const now = new Date();
  const startYear = 2019;
  const year = now.getFullYear();

  return { html: `${ startYear }${ year > startYear ? `–${ year }` : '' }&nbsp;©&nbsp;Все права защищены` };
} );

