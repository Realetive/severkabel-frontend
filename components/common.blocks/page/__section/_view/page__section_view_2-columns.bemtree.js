block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', '2-columns' )( {
    content: ( { block, _fromMarkdown }, { title, aside, description } ) => {
      const desc = _fromMarkdown( description ).map( _block => ( { ..._block, content: { html: _block.content[ 0 ] } } ) );

      return [
        {
          elem: 'layout',
          content: [
            aside && {
              elem: 'aside',
              content: { html: aside },
            },
            {
              elem: 'content',
              content: [
                title && {
                  block: 'heading',
                  mods: { size: 'l' },
                  mix: { block, elem: 'heading', elemMods: { size: 'l' } },
                  content: { html: title },
                },
                description && {
                  elem: 'description',
                  content: desc,
                },
              ],
            },
          ],
        },
      ];
    },
  } );
