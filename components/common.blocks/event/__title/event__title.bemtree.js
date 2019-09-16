block( 'event' )
  .elem( 'title' )
  .replace()( ( node, { title, url, source } ) => {
    const size = {
      preview: 'l',
      detail: 'l',
      intro: 's',
    };

    return {
      block: 'heading',
      mods: { size: size[ node.mods.view ] },
      mix: { block: node.block, elem: node.elem },
      content: url
        ? source
          ? {
            block: 'link',
            mods: { theme: 'inherit' },
            target: '_blank',
            attrs: {
              rel: 'noreferrer noopener',
            },
            url: source,
            content: title,
          }
          : {
            block: 'link',
            mods: { theme: 'inherit' },
            to: 'event',
            params: { event: url },
            content: title,
          }
        : title,
    };
  } );
