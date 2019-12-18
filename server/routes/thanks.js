const client = require( '../request/_request' );

const [ lang ] = JSON.parse( process.env.LANGS );

const api = async () => {
  const response = await Promise.all( [
    client.getDocument( 'serviceBasedData' ),
  ] );

  return {
    settings: response[ 0 ],
  }
}

const action = async ( context, params ) => {
  const _api = await api();
  const {
    settings: { title: projectName },
  } = _api;

  return {
    title: `Письмо успешно отправлено | «${ projectName[ lang ] }»`,
    page: 'thanks',
    params,
    api: _api,
  }
};

module.exports = action;
