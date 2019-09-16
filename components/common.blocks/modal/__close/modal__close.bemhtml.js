block( 'modal' ).elem( 'close' )(
  addJs()( true ),
  content()(
    {
      block: 'button',
      mods: {
        view: 'plain',
        size: 'l',
        theme: 'inherit',
      },
      icon: {
        block: 'icon',
        mods: {
          align: 'end',
          symbol: 'cross',
        },
      },
      text: 'Закрыть',
    }
  )
)
