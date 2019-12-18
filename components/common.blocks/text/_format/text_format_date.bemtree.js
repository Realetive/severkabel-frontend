const dateFormat = require( 'date-fns/format' );
const parseISO = require( 'date-fns/parseISO' )

const locale = {
  // eslint-disable-next-line global-require
  ru: require( 'date-fns/locale/ru' ),
  // eslint-disable-next-line global-require
  en: require( 'date-fns/locale/en-US' ),
};

block( 'text' )
  .mod( 'format', 'date' )
  .content()( ( { config: { langs: [ i18n ] } }, { date, format } ) => dateFormat( parseISO( date ), format, { locale: locale[ i18n ] } ) );
