block( 'logo' )
  .elem( 'text' )
  .replace()( ( { block, elem, config: { langs: [ lang ] } } ) => ( {
    block: 'image',
    mix: { block, elem },
    content: {
      html: lang === 'en'
        ? '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 177 28"><path d="M7.06 24.5l3.33.7v2.1H.92v-2.1l2.98-.7V5.57l-2.98-.7V2.94l7.36-.17 11.57 19.6V5.57l-2.98-.7V2.94l9.12-.17v2.1l-2.98.7V27.3h-4.38L7.06 7.98V24.5zM45.8 17.66c0 5.96-3.51 9.99-8.76 9.99s-8.41-3.16-8.41-9.47c0-5.96 3.68-9.82 8.94-9.82 5.25.01 8.23 3.69 8.23 9.3zm-13.5.35c0 4.21 1.4 6.84 4.91 6.84 3.51 0 4.91-2.45 4.91-7.01 0-3.86-1.23-6.66-4.73-6.66-3.51 0-5.09 2.27-5.09 6.83zM60 8.37c1.75 0 3.16.53 3.16.53l-.17 5.08h-2.28l-.53-2.63c-2.63 0-4.31 1.72-5.08 2.73V24.5l3.51.88v1.93h-9.99v-1.93l2.98-.88V11.53l-2.98-.7V8.9l5.78-.18.32 2.56c.86-.98 2.89-2.91 5.28-2.91zM84.19 25.2v1.93l-5.96.18-.28-2c-1.02 1.02-2.84 2.35-5.5 2.35-5.08 0-7.36-3.68-7.36-9.12 0-5.96 2.98-10.17 9.29-10.17 1.3 0 2.42.25 3.33.56V3.11l-2.98-.7V.48l6.49-.17V24.5l2.97.7zM74.02 11.18c-4.07 0-5.26 3.16-5.26 7.01 0 3.86 1.23 6.66 4.38 6.66 2.98 0 4.56-2.63 4.56-2.63V11.88s-1.23-.7-3.68-.7zM95.9 15.73l2.63-4.42-1.58-.49V8.9l7.71-.18v2.1l-2.49.42-3.65 5.36 4.52 7.89h.03l2.63.88v1.93h-4.73l-5.01-8.94h-3.37v6.13l2.28.88v1.93h-8.76v-1.93l2.98-.88V3.11l-2.98-.7V.48L92.6.31v15.43h3.3v-.01zM115.25 8.37c4.07 0 6.49 1.4 6.49 5.43v10.7l2.8.7v1.93l-5.43.18-.74-2.45c-1.19 1.19-3.3 2.8-5.75 2.8-3.33 0-5.26-1.93-5.26-5.26 0-4.03 3.16-5.43 8.06-5.43h2.8v-2.8c0-2.1-1.23-3.16-3.33-3.16s-3.54.53-3.54.53l-.49 2.63h-2.28l-.18-4.38c.01-.02 3.87-1.42 6.85-1.42zm-4.31 13.85c0 1.58.98 2.63 2.56 2.63 2.63 0 4.73-2.8 4.73-2.8v-2.8h-2.45c-3.51-.01-4.84.87-4.84 2.97zM137.68 8.37c5.08 0 7.36 3.68 7.36 9.11 0 5.96-3.33 10.17-9.64 10.17-3.86 0-6.49-.88-6.49-.88V3.11l-2.8-.7V.48l6.31-.17v10.1c1.16-.92 2.98-2.04 5.26-2.04zm-1.75 16.48c4.07 0 5.43-3.16 5.43-7.01 0-3.85-1.23-6.66-4.38-6.66-3.16 0-4.56 2.28-4.56 2.28V24.5s.92.35 3.51.35zM156.79 24.85c3.51 0 5.89-1.93 5.89-1.93l1.23 1.82s-3.26 2.91-7.47 2.91c-5.61 0-8.41-3.68-8.41-9.47 0-5.61 3.51-9.82 8.59-9.82s7.36 2.98 7.36 8.24c0 .88-.18 1.86-.18 1.86l-12.1.07c.01 3.86 2.07 6.32 5.09 6.32zm-.35-13.74c-2.8 0-4.38 2.17-4.59 4.8h8.41c0-2.63-1.02-4.8-3.82-4.8zM176.32 25.37v1.93h-9.71v-1.93l2.98-.88V3.11l-2.98-.7V.48l6.56-.17V24.5l3.15.87z"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 304 36"><path d="M11.55 6.75c-4.57 0-7.11 3.39-7.11 9.65 0 6.1 3.05 8.8 7.28 8.8 3.56 0 6.77-2.71 6.77-2.71l1.35 2.2s-3.39 3.56-8.47 3.56C4.6 28.25.53 24.19.53 16.57c0-7.79 4.4-12.7 11.34-12.7 3.73 0 7.62 1.69 7.62 1.69l-.17 5.76H16.8l-.91-3.89c-.01-.01-1.8-.68-4.34-.68zM30.85 25.54c3.39 0 5.69-1.86 5.69-1.86l1.19 1.76s-3.15 2.81-7.21 2.81c-5.42 0-8.13-3.56-8.13-9.14 0-5.42 3.39-9.48 8.3-9.48s7.11 2.88 7.11 7.96c0 .85-.17 1.8-.17 1.8l-11.68.07c-.01 3.71 1.99 6.08 4.9 6.08zm-.34-13.27c-2.71 0-4.23 2.1-4.44 4.64h8.13c0-2.54-.98-4.64-3.69-4.64zM43.55 25.3V12.57L40.67 12v-1.86l6.27-.17h4.57c3.05 0 5.42 1.69 5.42 4.4 0 2.54-1.76 3.69-4.13 3.93 2.57.27 4.81 1.83 4.81 4.37 0 3.73-2.81 5.25-7.72 5.25h-9.21v-1.86l2.87-.76zm6.7-7.99c2.03 0 3.28-.58 3.28-2.44 0-1.52-.95-2.44-2.64-2.44h-3.96v4.88h3.32zm-.2 8.13c2.54 0 4-.75 4-2.61 0-2.37-1.19-3.32-3.96-3.32h-3.15v5.93h3.11zM69.29 25.54c3.39 0 5.69-1.86 5.69-1.86l1.19 1.76s-3.15 2.81-7.21 2.81c-5.42 0-8.13-3.56-8.13-9.14 0-5.42 3.39-9.48 8.3-9.48s7.11 2.88 7.11 7.96c0 .85-.17 1.8-.17 1.8l-11.68.07c-.01 3.71 1.98 6.08 4.9 6.08zm-.34-13.27c-2.71 0-4.23 2.1-4.44 4.64h8.13c0-2.54-.98-4.64-3.69-4.64zM89.94 9.62c4.91 0 7.28 3.56 7.28 8.8 0 5.76-2.88 9.82-9.14 9.82-1.12 0-2.13-.2-3.05-.47v5.38l3.56.68v1.86h-9.65v-1.86l2.71-.68V12.67L78.77 12v-1.86l5.76-.17.27 1.9c1.01-.96 2.81-2.25 5.14-2.25zm-1.35 15.92c3.93 0 5.08-3.05 5.08-6.77 0-3.73-1.35-6.43-4.4-6.43-3.05 0-4.23 2.37-4.23 2.37v10.16c-.01-.01 1.01.67 3.55.67zM117.88 12.67V25.2l2.88.85v1.86h-8.47v-1.86l2.2-.85v-5.42h-8.13v5.42l2.2.85v1.86h-8.47v-1.86l2.88-.85V12.67L100.1 12v-1.86l8.47-.17V12l-2.2.68v4.57h8.13v-4.57l-2.2-.68v-1.86l8.47-.17V12l-2.89.67zM126.35 25.3V12.67l-2.88-.67v-1.86l9.48-.17V12l-3.22.71v3.59h2.98c3.89 0 6.84 1.8 6.84 5.86 0 3.89-2.81 5.76-7.72 5.76h-8.36v-1.86l2.88-.76zm5.65.07c2.54 0 4-1.02 4-2.88 0-2.71-1.19-3.66-3.96-3.66h-2.3v6.54H132zm8.23 2.54v-1.86l2.54-.85V12.67l-2.54-.67v-1.86l8.47-.17V12l-2.54.68V25.2l2.54.85v1.86h-8.47zM169.35 12.67V25.2l2.88.85v1.86h-8.3v-1.86l2.2-.85v-8.64l-8.64 7.79v.85l2.2.85v1.86h-8.3v-1.86l2.88-.85V12.67l-2.86-.67v-1.86l8.3-.17V12l-2.2.68v8.64l8.64-7.79v-.85l-2.2-.68v-1.86l8.3-.17V12l-2.9.67zM155.98 2.21l4.64-.17c0 1.96.91 2.91 2.37 2.91s2.34-.95 2.34-2.74l2.81-.17c0 3.12-2.78 5.05-6.1 5.05-3.32-.01-6.03-1.77-6.06-4.88zM208.26 25.88v2.03h-9.65v-2.03l2.88-.68-5.72-8.13h-3.42v8.13l2.88.68v2.03h-9.31v-2.03l2.88-.68V6.92l-2.88-.68V4.38l9.31-.17v2.03l-2.88.68v7.45h3.12l4.77-7.52-2.54-.61V4.38l9.21-.17v2.03l-3.08.68-5.38 8.5 6.94 9.79 2.87.67zM217.06 9.62c3.93 0 6.27 1.35 6.27 5.25V25.2l2.71.68v1.86l-5.25.17-.71-2.37c-1.15 1.15-3.18 2.71-5.55 2.71-3.22 0-5.08-1.86-5.08-5.08 0-3.89 3.05-5.25 7.79-5.25h2.71v-2.71c0-2.03-1.19-3.05-3.22-3.05-2.03 0-3.42.51-3.42.51l-.47 2.54h-2.2l-.17-4.23c-.01 0 3.71-1.36 6.59-1.36zM212.89 23c0 1.52.95 2.54 2.47 2.54 2.54 0 4.57-2.71 4.57-2.71v-2.71h-2.37c-3.38 0-4.67.85-4.67 2.88zM245.34 18.77c0 5.59-3.29 9.48-8.36 9.48-5.01 0-8.06-3.59-8.06-11.18 0-11.41 4.91-14.46 12.39-14.46l1.32-2.4 2.37.58-1.52 4.74a44 44 0 00-2.91-.1c-4.13 0-8.33 2.1-9.11 8.33 1.08-2.47 3.79-3.62 6.26-3.62 4.91-.01 7.62 3.55 7.62 8.63zm-3.56.17c0-3.39-1.19-6.1-4.57-6.1-3.42 0-5.08 2.17-5.08 6.1 0 3.52 1.73 6.6 4.98 6.6 3.38 0 4.67-2.37 4.67-6.6zM256.51 25.54c3.39 0 5.69-1.86 5.69-1.86l1.19 1.76s-3.15 2.81-7.21 2.81c-5.42 0-8.13-3.56-8.13-9.14 0-5.42 3.39-9.48 8.3-9.48s7.11 2.88 7.11 7.96c0 .85-.17 1.8-.17 1.8l-11.68.07c-.01 3.71 1.99 6.08 4.9 6.08zm-.34-13.27c-2.71 0-4.23 2.1-4.44 4.64h8.13c0-2.54-.98-4.64-3.69-4.64zM281.6 12.67V25.2l2.88.85v1.86h-9.14v-1.86l2.88-.85V12.67h-4.74c-.44 8.43-.54 15.61-6.2 15.61-.68 0-1.39-.1-2.2-.31l.37-3.15c.34.07.68.1.98.1 4.06 0 4.23-6.64 4.47-12.26l-2.87-.66V9.97h16.46V12l-2.89.67zM290.07 25.3V12.67l-2.88-.67v-1.86l9.31-.17V12l-3.05.71v3.59h2.98c3.89 0 6.84 1.8 6.84 5.86 0 3.89-2.81 5.76-7.72 5.76h-8.36v-1.86l2.88-.76zm5.66.07c2.54 0 4-1.02 4-2.88 0-2.71-1.19-3.66-3.96-3.66h-2.3v6.54h2.26z"/></svg>',
    }
  } ) );
