block( 'video' ).elem( 'source' )( {
  tag: 'source',
  attrs: ( node, { src } ) => {
    const file = src.split( '.' );
    const extension = file[ file.length - 1 ];
    const mimeTypes = {
      // ext: 'type'
      mp4: 'mp4',
      ogv: 'ogg',
      ogm: 'ogg',
      ogg: 'ogg',
      webm: 'webm',
    }

    return {
      src,
      type: `video/${ mimeTypes[ extension ] || 'unknown' }`,
    }
  },

} );
