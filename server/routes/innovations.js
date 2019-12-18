const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const api = async () => {
  const [ settings, [ page ] ] = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.fetch( '*[ _id == "innovations" ] { ..., "innovations": innovations[] { ..., innovation-> } }', {} ),
  ] );

  return {
    settings,
    page,
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
    page: 'innovations',
    params,
    api: _api,
  }
};

module.exports = action;
