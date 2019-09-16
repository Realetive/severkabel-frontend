block( 'page' ).mod( 'route', 'thanks' )( {
  route: [
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      attrs: {
        style: 'padding-top: 3em; padding-bottom: 13em;',
      },
      content: [
        {
          block: 'heading',
          mods: { size: 'xxl' },
          content: 'Спасибо',
        },
        { tag: 'br' },
        {
          block: 'paragraph',
          mods: { size: 'xl' },
          attrs: {
            style: 'max-width: 40em;',
          },
          content: [
            'Спасибо, мы получили ваше письмо и постараемся ответить на него сразу, ',
            'как только появится интересующая вас информация.',
          ],
        },
      ],
    },
  ],
} );
