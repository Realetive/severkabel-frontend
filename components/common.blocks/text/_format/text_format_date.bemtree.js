const dateFormat = require( 'date-fns/format' );
const parseISO = require( 'date-fns/parseISO' )

const locale = {
  // eslint-disable-next-line global-require
  ru: require( 'date-fns/locale/ru' ),
}

block( 'text' )
  .mod( 'format', 'date' )
  .content()( ( node, { date, format } ) => dateFormat( parseISO( date ), format, { locale: locale.ru } ) );
