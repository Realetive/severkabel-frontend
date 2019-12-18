const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const api = async () => {
  const [ settings, page, events ] = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.getDocument( 'events' ),
    client.fetch( '*[_type == "event"] | order(publishedAt desc) {...}', {} ),
  ] );

  return { settings, page, events };
};

const action = async ( context, params ) => {
  const _api = await api();
  const {
    settings: { title: projectName },
    page: { title },
  } = _api;

  return {
    title: `${ title[ lang ] } | «${ projectName[ lang ] }»`,
    page: 'events',
    params,
    api: _api,
  }
};

module.exports = action;
