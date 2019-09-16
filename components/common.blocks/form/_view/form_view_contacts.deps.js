[
  {
    shouldDeps: [
      {
        mods: {
          'has-validation': true,
          message: 'popup',
        },
      },
      {
        elems: [
          'header',
          'content',
          'footer',
        ],
      },
      {
        block: 'heading',
        mods: {
          size: [ 'l', 'xxl' ],
        },
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
          type: 'submit',
          view: 'action',
        },
      },
      {
        block: 'paragraph',
      },
    ],
  },
];
