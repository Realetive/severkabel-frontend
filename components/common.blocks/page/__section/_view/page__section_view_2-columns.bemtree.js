block( 'page' )
  .elem( 'section' )
  .elemMod( 'view', '2-columns' )( {
    content: ( { block, _fromMarkdown }, { title, aside, description } ) => {
      const desc = _fromMarkdown( description );

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
