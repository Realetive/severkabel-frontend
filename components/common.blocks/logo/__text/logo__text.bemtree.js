block( 'logo' )
  .elem( 'text' )
  .replace()( ( { block, elem, config: { langs: [ lang ] } } ) => ( {
    block: 'image',
    mix: { block, elem },
    content: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 30"><path fill="currentColor" d="m7.1 26.4 3.6.8v2.4H.4v-2.4l3.3-.8V5.8L.4 5V2.9l8.1-.2 12.7 21.4V5.8L17.9 5V2.9l10-.2v2.4l-3.4.9v23.8h-4.8L7.1 8.7v17.7ZM49.5 19c0 6.5-3.8 10.9-9.5 10.9s-9.2-3.5-9.2-10.3c0-6.5 4-10.8 9.8-10.8 5.5 0 8.9 4 8.9 10.2Zm-14.8.4c0 4.6 1.6 7.5 5.4 7.5 3.8 0 5.4-2.7 5.4-7.6 0-4.3-1.3-7.3-5.2-7.3-3.9 0-5.6 2.4-5.6 7.4ZM65 8.8c1.9 0 3.5.6 3.5.6l-.2 5.6h-2.5l-.6-2.9c-2.9 0-4.8 1.9-5.6 3v11.4l3.8 1v2.1H52.5v-2.1l3.3-1v-14l-3.3-.8V9.6l6.3-.2.3 2.9c1-1.4 3.2-3.5 5.9-3.5ZM91.3 27.2v2.1l-6.5.2-.3-2.2c-1.1 1.1-3.2 2.5-6 2.5-5.6 0-8.1-4-8.1-10 0-6.5 3.3-11.1 10.2-11.1 1.4 0 2.7.3 3.6.6V2.9l-3.3-.8V.2L88 0v26.5l3.3.7ZM80.2 11.8c-4.4 0-5.7 3.5-5.7 7.6s1.3 7.3 4.8 7.3c3.3 0 4.9-2.9 4.9-2.9V12.6c.2 0-1.3-.8-4-.8ZM106.9 29.9c-7.6 0-12.2-4.6-12.2-13.2 0-8.9 4.9-14.4 12.9-14.4 4.3 0 8.6 1.9 8.6 1.9l-.2 6.3h-2.5l-1.1-4.3s-2.4-.8-5.2-.8c-5.2 0-8.1 3.8-8.1 10.9 0 7 3.5 10.2 8.4 10.2 2.7 0 5.4-1 5.4-1v-6.3l-3.3-.8v-2.1l10-.2v2.4l-2.9.8v8.3c0-.1-4.1 2.3-9.8 2.3ZM135.1 8.8c1.9 0 3.5.6 3.5.6l-.2 5.6h-2.5l-.6-2.9c-2.9 0-4.8 1.9-5.6 3v11.4l3.8 1v2.1h-10.9v-2.1l3.3-1v-14l-3.3-.8V9.6l6.3-.2.3 2.9c1.2-1.4 3.4-3.5 5.9-3.5ZM150.5 27.4v2.1h-10v-2.1l3.3-1V12.3l-3.3-.8V9.4l7.1-.2v17.3l2.9.9ZM145.4.2c1.6 0 2.5.8 2.5 2.7 0 1.7-1.3 2.7-2.5 2.7-1.6 0-2.5-1-2.5-2.7.2-1.7 1.3-2.7 2.5-2.7ZM174.5 27.2v2.1l-6.5.2-.3-2.2c-1.1 1.1-3.2 2.5-6 2.5-5.6 0-8.1-4-8.1-10 0-6.5 3.3-11.1 10.2-11.1 1.4 0 2.7.3 3.6.6V2.9l-3.4-.8V.2l7.1-.2v26.5l3.4.7Zm-11.1-15.4c-4.4 0-5.7 3.5-5.7 7.6s1.3 7.3 4.8 7.3c3.3 0 4.9-2.9 4.9-2.9V12.6c-.1 0-1.3-.8-4-.8Z"/></svg>' },
  } ) );
