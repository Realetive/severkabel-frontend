block( 'page' ).mod( 'route', 'index' )( {
  route: node => {
    const part = {
      intro: {
        elem: 'section',
        elemMods: {
          view: 'intro',
          theme: 'dark',
        },
      },
      slider: {
        elem: 'section',
        elemMods: {
          view: 'slider',
          layout: !node.data.api.page.isGalleryFluid,
        },
      },
      cooperation: {
        elem: 'section',
        elemMods: { view: 'cooperation' },
      },
      indicators: {
        elem: 'section',
        elemMods: { view: 'indicators' },
      },
      events: {
        elem: 'section',
        elemMods: { view: 'events' },
        events: node.data.api.page.events,
      },
      partners: {
        elem: 'section',
        elemMods: { view: 'partners' },
      },
      feedback: {
        elem: 'section',
        elemMods: {
          view: 'feedback',
          theme: 'dark',
        },
      },
    };

    const template = [
      'intro',
      {
        elem: 'lines',
        content: [],
      },
    ];

    return node.data.api.page.content.reduce(
      ( content, { value, enabled }, index ) => {
        if ( !enabled ) return content;

        if ( index >= 1 && index <= 3 ) {
          content[ 1 ].content.push( part[ value ] );
        } else {
          content[ index ] = part[ value ];
        }

        return content;
      },
      template
    );
  },
} );
