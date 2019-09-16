[
  {
    shouldDeps: [
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
          width: 'available',
          type: 'submit',
          view: 'action',
        },
      },
    ],
  },
];
