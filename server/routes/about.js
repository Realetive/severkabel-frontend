const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

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

const action = async ( context, params ) => {
  const _api = await api();
  const {
    settings: { title: projectName },
    page: { title },
  } = _api;

  return {
    title: `${ title[ lang ] } | «${ projectName[ lang ] }»`,
    page: 'about',
    params,
    api: _api,
  }
};

module.exports = action;
