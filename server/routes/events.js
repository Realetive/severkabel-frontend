const client = require( '../request/_request' );

const api = async () => {
  const response = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.getDocument( 'events' ),
    client.fetch( '*[_type == "event"] {...}', {} ),
  ] );

  return {
    settings: response[ 0 ],
    page: response[ 1 ],
    events: response[ 2 ],
  }
}

const action = async ( context, params ) => ( {
  page: 'events',
  params,
  api: await api(),
} );

module.exports = action;
