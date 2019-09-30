const client = require( '../request/_request' );

const api = async () => {
  const [ settings, page, events ] = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.getDocument( 'events' ),
    client.fetch( '*[_type == "event"] | order(publishedAt) {...}', {} ),
  ] );

  return { settings, page, events };
};

const action = async ( context, params ) => ( {
  page: 'events',
  params,
  api: await api(),
} );

module.exports = action;
