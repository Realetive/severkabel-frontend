const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const data = async () => {
  const response = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
    client.fetch( '*[_type == "index"] {...,"events": events[]->{...}}[0]', {} ),
  ] );

  return {
    settings: response[ 0 ],
    page: response[ 1 ],
  };
};

const action = async ( context, params ) => {
  const api = await data();
  const {
    settings: { title: projectName },
  } = api;

  return {
    title: `«${ projectName[ lang ] }»`,
    page: 'index',
    params,
    api,
  };
};

module.exports = action;
