[
  {
    shouldDeps: [
      {
        block: 'heading',
        mods: {
          capitel: true,
          stroke: true,
          size: 'xl',
        },
      },
      {
        block: 'pagination',
        elems: [ { elem: 'link', mods: { to: [ 'prev', 'next' ] } } ],
      },
    ],
  },
  {
    tech: 'js',
    shouldDeps: [
      {
        tech: 'bemhtml',
        block: 'pagination',
        elems: [ { elem: 'link', mods: { to: [ 'prev', 'next' ] } } ],
      },
      {
        tech: 'bemhtml',
        block: 'image',
        mods: { width: 'available' },
      },
      {
        tech: 'bemhtml',
        block: 'button',
        mods: {
          type: 'link',
          view: 'pseudo',
        },
      },
      {
        tech: 'bemhtml',
        block: 'icon',
        mods: { symbol: 'arrow-right' },
      },
    ],
  },
];
