block( 'project' )
  .elem( 'title' )
  .replace()( ( node, { title, url } ) => {
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
        ? {
          block: 'link',
          mods: { theme: 'inherit' },
          to: 'project',
          params: { project: url },
          content: title,
        }
        : title,
    };
  } );
