const client = require( '../request/_request' );

const api = async () => {
  const response = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
  ] );

  return {
    settings: response[ 0 ],
  }
}

const action = async ( context, params ) => ( {
  page: 'error',
  params,
  api: await api(),
  reason: context.reason,
} );

module.exports = action;
