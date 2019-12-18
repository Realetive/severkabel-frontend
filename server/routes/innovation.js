const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const api = async alias => {
  const [ settings, [ page ] ] = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.fetch( `*[slug.current == "${ alias }"] {...}`, {} ),
  ] );

  return {
    settings,
    page,
  }
}

const action = async ( context, params ) => {
  const _api = await api( params.innovation );
  const {
    settings: { title: projectName },
    page: { title },
  } = _api;

  return {
    title: `${ title[ lang ] } | «${ projectName[ lang ] }»`,
    page: 'innovation',
    params,
    api: _api,
  }
};

module.exports = action;
