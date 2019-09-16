[
  {
    shouldDeps: [
      {
        block: 'map',
      },
      {
        block: 'form',
        mods: {
          view: 'feedback',
          'has-validation': true,
          message: 'popup',
        },
      },
      {
        block: 'form',
        elems: [
          'header',
          'content',
          'footer',
        ],
      },
      {
        block: 'heading',
        mods: { size: 'l' },
      },
      {
        block: 'paragraph',
      },
      {
        block: 'form-field',
        elems: [ 'label' ],
      },
      {
        block: 'form-field',
        mods: {
          type: [ 'input', 'textarea', 'checkbox' ],
          required: true,
          message: 'popup',
        },
      },
      {
        block: 'input',
        mods: { width: 'available' },
      },
      {
        block: 'textarea',
        mods: { width: 'available' },
      },
      {
        block: 'button',
        mods: {
          width: 'available',
          type: 'submit',
          view: 'action',
        },
      },
    ],
  },
];
