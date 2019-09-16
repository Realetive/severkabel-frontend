/**
 *
 * limit
 * offset
 * sortDir [ 'asc' | 'desc' | 'rand' ]
 * sortBy
 * result
 * entities
 * items
 * getKey
 */
block( 'list' )(
  tag()( ( node, ctx ) => ctx.tag || 'ul' ),

  addAttrs()( ( node, ctx ) => ( {
    start: ctx.offset || 1,
  } ) ),

  match( ( node, ctx ) => ctx.result && ctx.entities && !ctx.items && !ctx.content ).def()(
    ( node, ctx ) => {
      function shuffle ( array ) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        while ( currentIndex !== 0 ) {
          randomIndex = Math.floor( Math.random() * currentIndex );
          currentIndex -= 1;
          temporaryValue = array[ currentIndex ];
          array[ currentIndex ] = array[ randomIndex ];
          array[ randomIndex ] = temporaryValue;
        }
        return array;
      }

      const sortDir = ctx.sortDir.toLowerCase();
      let items = ctx.result.map( item => ctx.entities[ item ] );

      if ( sortDir === 'asc' || sortDir === 'desc' ) {
        items = items.sort( ( a, b ) => {
          const x = typeof a === 'object' && ctx.sortBy ? a[ ctx.sortBy ] : a;
          const y = typeof b === 'object' && ctx.sortBy ? b[ ctx.sortBy ] : b;

          if ( typeof x === 'string' && typeof y === 'string' ) {
            return x.localeCompare( y );
          }
          if ( typeof x === 'number' && typeof y === 'number' ) {
            return x - y;
          }
          if ( typeof x === 'number' || typeof y === 'number' ) {
            return x === 'number' ? 1 : -1;
          }
          return x === y;
        } );
        if ( sortDir === 'desc' ) {
          items = items.reverse();
        }
      }
      if ( sortDir === 'rand' ) {
        items = shuffle( items );
      }
      return applyNext( {
        ctx: {
          ...ctx,
          items,
        },
      } );
    },
  ),

  match( ( node, ctx ) => ctx.items && !ctx.content ).content()( ( node, { limit = 0, offset = 0, items, getKey, itemMix } ) => {
    limit = limit || items.length;
    items = items.slice( offset, offset + limit );

    return items.map( item => typeof item === 'object' && getKey
      ? { elem: 'item', mix: itemMix, content: item[ getKey ] }
      : item ? { elem: 'item', mix: itemMix, content: item } : '' );
  } ),
);
