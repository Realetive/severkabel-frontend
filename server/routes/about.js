const client = require( '../request/_request' );

const api = async () => {
  const response = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.getDocument( 'about' ),
  ] );

  return {
    settings: response[ 0 ],
    page: response[ 1 ],
  }
}

const action = async ( context, params ) => ( {
  page: 'about',
  params,
  api: await api(),
} );

module.exports = action;
