const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const api = async () => {
  const [ settings, page, projects ] = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.getDocument( 'projects' ),
    client.fetch( '*[_type == "project"] | order(publishedAt desc) {...}', {} ),
  ] );

  return { settings, page, projects };
};

const action = async ( context, params ) => {
  const _api = await api();
  const {
    settings: { title: projectName },
    page: { title },
  } = _api;

  return {
    title: `${ title[ lang ] } | «${ projectName[ lang ] }»`,
    page: 'projects',
    params,
    api: _api,
  }
};

module.exports = action;
