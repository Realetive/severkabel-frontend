block( 'logo' )(
  wrap()( ( node, ctx ) => {
    const mix = ctx.mix;

    delete ctx.mix;

    ctx.content = [
      { elem: 'icon' },
      { elem: 'text' },
    ];

    return {
      block: 'link',
      mods: { theme: 'inherit' },
      mix,
      to: 'index',
      content: ctx,
    }
  } )
)
