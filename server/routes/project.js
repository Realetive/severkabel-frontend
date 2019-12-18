const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const api = async projectSlug => {
  const response = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.fetch( '*[_type == "project"] {...}', {} ),
    client.fetch( `*[_type == "project" && slug.current == "${ projectSlug }"] {...}`, {} ),
  ] );

  return {
    settings: response[ 0 ],
    page: response[ 1 ],
    project: response[ 2 ],
  };
}

const action = async ( context, params ) => {
  const _api = await api( params.project );
  const {
    settings: { title: projectName },
    project: [ { title } ],
  } = _api;

  return {
    title: `${ title[ lang ] } | «${ projectName[ lang ] }»`,
    page: 'project',
    params,
    api: _api,
  }
};

module.exports = action;
