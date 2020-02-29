block( 'form' ).mod(
  'view',
  'contacts'
)( {
  extend: {
    'ctx.directions': [ 'bottom-center' ],
    'ctx.method': 'POST',
  },
  addMods: {
    'has-validation': true,
    message: 'popup',
  },
  content: ( node, { heading, subheading, description } ) => [
    {
      elem: 'header',
      content: [
        heading && {
          block: 'heading',
          mods: { size: 'xxl' },
          mix: { block: node.block, elem: 'heading', elemMods: { size: 'l' } },
          content: heading,
        },
        subheading && {
          block: 'heading',
          mods: { size: 'l' },
          mix: {
            block: node.block,
            elem: 'heading',
            elemMods: { size: 'xxl' },
          },
          content: subheading,
        },
        description && {
          block: 'paragraph',
          content: description,
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
            js: {
              required: {
                message:
                  node.config.langs[ 0 ] === 'en'
                    ? 'This field is required'
                    : 'Это поле обязательно',
              },
            },
            directions: [ 'bottom-left' ],
            name: 'name',
            content: [
              {
                elem: 'label',
                content: node.config.langs[ 0 ] === 'en' ? 'Name' : 'Имя',
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
            js: {
              required: {
                message:
                  node.config.langs[ 0 ] === 'en'
                    ? 'This field is required'
                    : 'Это поле обязательно',
              },
            },
            directions: [ 'bottom-left' ],
            name: 'phone',
            content: [
              {
                elem: 'label',
                content:
                  node.config.langs[ 0 ] === 'en'
                    ? 'Phone number'
                    : 'Номер телефона',
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
            js: {
              required: {
                message:
                  node.config.langs[ 0 ] === 'en'
                    ? 'This field is required'
                    : 'Это поле обязательно',
              },
            },
            directions: [ 'bottom-left' ],
            name: 'email',
            content: [
              {
                elem: 'label',
                content: node.config.langs[ 0 ] === 'en' ? 'Email' : 'Почта',
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
            js: {
              required: {
                message:
                  node.config.langs[ 0 ] === 'en'
                    ? 'This field is required'
                    : 'Это поле обязательно',
              },
            },
            directions: [ 'bottom-left' ],
            name: 'message',
            content: [
              {
                elem: 'label',
                content:
                  node.config.langs[ 0 ] === 'en'
                    ? 'Yor message'
                    : 'Ваше сообщение',
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
            js: {
              required: {
                message:
                  node.config.langs[ 0 ] === 'en'
                    ? 'This field is required'
                    : 'Это поле обязательно',
              },
            },
            directions: [ 'bottom-left' ],
            name: 'agreement',
            content: [
              {
                elem: 'control',
                content: {
                  block: 'checkbox',
                  text: [
                    node.config.langs[ 0 ] === 'en'
                      ? 'I agree with '
                      : 'Я согласен с предоставлением ',
                    {
                      block: 'link',
                      mods: { view: 'text' },
                      url: '/policy',
                      target: '_blank',
                      content:
                        node.config.langs[ 0 ] === 'en'
                          ? 'privacy policy'
                          : 'персональных данных',
                    },
                  ],
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
          type: 'submit',
          view: 'action',
        },
        text: [
          node.config.langs[ 0 ] === 'en'
            ? 'Submit '
            : 'Отправить ',
          {
            block: 'icon',
            mods: { symbol: 'arrow-right' },
          },
        ],
      },
    },
  ],
} );
