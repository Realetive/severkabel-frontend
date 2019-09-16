block( 'form' ).mod( 'view', 'contacts' )( {
  extend: {
    'ctx.directions': [ 'bottom-center' ],
    'ctx.method': 'POST',
  },
  addMods: {
    message: 'popup',
  },
  content: node => [
    {
      elem: 'header',
      content: [
        {
          block: 'heading',
          mods: { size: 'xxl' },
          mix: { block: node.block, elem: 'heading', elemMods: { size: 'l' } },
          content: 'Контакты',
        },
        {
          block: 'heading',
          mods: { size: 'l' },
          mix: {
            block: node.block,
            elem: 'heading',
            elemMods: { size: 'xxl' },
          },
          content: 'Напишите нам',
        },
      ],
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'field',
          content: {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true,
              message: 'popup',
            },
            directions: [ 'bottom-left' ],
            name: 'name',
            content: [
              {
                elem: 'label',
                content: 'Имя',
              },
              {
                elem: 'control',
                content: {
                  block: 'input',
                  mods: { width: 'available' },
                },
              },
            ],
          },
        },
        {
          elem: 'field',
          content: {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true,
              message: 'popup',
            },
            directions: [ 'bottom-left' ],
            name: 'phone',
            content: [
              {
                elem: 'label',
                content: 'Номер телефона',
              },
              {
                elem: 'control',
                content: {
                  block: 'input',
                  mods: { width: 'available' },
                  placeholder: '+7 9×× ×××-××-××',
                },
              },
            ],
          },
        },
        {
          elem: 'field',
          content: {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true,
              message: 'popup',
            },
            directions: [ 'bottom-left' ],
            name: 'email',
            content: [
              {
                elem: 'label',
                content: 'Почта',
              },
              {
                elem: 'control',
                content: {
                  block: 'input',
                  mods: { width: 'available' },
                },
              },
            ],
          },
        },
        {
          elem: 'field',
          content: {
            block: 'form-field',
            mods: {
              type: 'textarea',
              required: true,
              message: 'popup',
            },
            directions: [ 'bottom-left' ],
            name: 'message',
            content: [
              {
                elem: 'label',
                content: 'Ваше сообщение',
              },
              {
                elem: 'control',
                content: {
                  block: 'textarea',
                  mods: { width: 'available' },
                  rows: 5,
                },
              },
            ],
          },
        },
        {
          elem: 'field',
          content: {
            block: 'form-field',
            mods: {
              type: 'checkbox',
              required: true,
              message: 'popup',
            },
            directions: [ 'bottom-left' ],
            name: 'input',
            content: [
              {
                elem: 'control',
                content: {
                  block: 'checkbox',
                  text: 'Я согласен с предосталением персональных данных',
                },
              },
            ],
          },
        },
      ],
    },
    {
      elem: 'footer',
      content: {
        block: 'button',
        mods: {
          width: 'available',
          type: 'submit',
          view: 'action',
        },
        text: [
          'Отправить ',
          {
            block: 'icon',
            mods: { symbol: 'arrow-right' },
          },
        ],
      },
    },
  ],
} );
