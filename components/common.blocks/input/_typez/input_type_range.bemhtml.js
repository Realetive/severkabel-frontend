block( 'input' ).mod( 'type', 'range' )(
  // eslint-disable-next-line
  def()( ( node, { min = 0, max = 10, step = 1 } ) => applyNext() ),

  elem( 'control' )(
    addAttrs()( node => {
      const {
        min,
        max,
        step,
      } = node._input;

      return {
        type: 'range',
        min,
        max,
        step,
      }
    } ),
  ),

  elem( 'output' )(
    tag()( 'output' ),
  ),

  elem( 'action' )(
    replace()( node => ( {
      block: 'button',
      mods: { view: 'action' },
      mix: { block: node.block, elem: node.elem, elemMods: node.elemMods },
      icon: {
        block: 'icon',
        mods: { symbol: node.elemMods.type },
      },
    } ) )
  ),

  elem( 'output-control' )(
    tag()( 'input' ),

    // mix()( node => ( {
    //   block: node.block,
    //   mods: {
    //     size: node.mods.size,
    //     theme: node.mods.theme
    //   }
    // } ) ),
    addAttrs()( node => {
      const {
        min,
        max,
        step,
        val,
      } = node._input;

      return {
        // type: 'number',
        min,
        max,
        step,
        value: val,
        size: max.toString().length,
      }
    } ),
  ),

  elem( 'label' )(
    tag()( 'span' ),
    content()( node => {
      const {
        min,
        max,
        minLabel,
        maxLabel,
      } = node._input;

      if ( node.elemMods.type === 'min' ) return minLabel || min;
      if ( node.elemMods.type === 'max' ) return maxLabel || max;
    } )
  ),

  elem( 'box' )(
    content()( [
      { elem: 'output' },
      { elem: 'control' },
      { elem: 'track' },
    ] )
  ),

  content()( [
    {
      elem: 'label',
      elemMods: { type: 'max' },
    },
    {
      elem: 'label',
      elemMods: { type: 'min' },
    },
    { elem: 'box' },

    // {
    //   elem: 'output-box',
    //   content: [
    //     {
    //       elem: 'action',
    //       elemMods: { type: 'minus' }
    //     },
    //     { elem: 'output-control' },
    //     {
    //       elem: 'action',
    //       elemMods: { type: 'plus' }
    //     },
    //   ]
    // },
  ] ),

);
