block( 'page' )
  .elem( 'promo-video' )
  .content()( ( { data, _urlFor } ) => {
    const poster = _urlFor( ( ( data.api.page || {} ).promo || {} ).promoImage )
      .fit( 'crop' )
      .width( 1440 )
      .height( 900 )
      .url();

    return {
      block: 'video',
      attrs: {
        autoplay: true,
        loop: true,
        muted: true,
        preload: true,
        playsinline: true,
        style: `background: transparent url(${ poster }) 50% 50% / cover no-repeat; width: 100%; height: 100%`,
      },
      poster:
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      source: ( ( ( data.api.page || {} ).promo || {} ).promoVideo || [] ).map(
        video => {
          const file = video.asset._ref.split( '-' );

          return `https://cdn.sanity.io/files/p9gjsb2n/production/${ file[ 1 ] }.${
            file[ 2 ]
          }`;
        }
      ),
    };
  } );
