const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const api = async eventSlug => {
  const response = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.fetch( '*[_type == "event"] {...}', {} ),
    client.fetch( `*[_type == "event" && slug.current == "${ eventSlug }"] {...}`, {} ),
  ] );

  return {
    settings: response[ 0 ],
    page: response[ 1 ],
    event: response[ 2 ],
  }
}

const action = async ( context, params ) => {
  const _api = await api( params.event );
  const {
    settings: { title: projectName },
    event: [ { title } ],
  } = _api;

  return {
    title: `${ title[ lang ] } | «${ projectName[ lang ] }»`,
    page: 'event',
    params,
    api: _api,
  }
};

module.exports = action;
