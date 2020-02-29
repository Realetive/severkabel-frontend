block( 'logo' )
  .elem( 'text' )
  .content()( ( { data: { api }, config: { langs: [ lang ] } } ) => api.settings.title[ lang ] );
