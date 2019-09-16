const imageUrlBuilder = require( '@sanity/image-url' );
const MarkdownBemjson = require( 'markdown-bemjson' );

const builder = imageUrlBuilder( {
  projectId: 'p9gjsb2n',
  dataset: 'production',
} );

const markdownBemjson = new MarkdownBemjson( {
  isEscapeHtml: false,
  wrapper: false,
  markdown: {
    breaks: true,
  },
  rules: {
    br () {
      return {
        tag: 'br',
      };
    },
    paragraph ( text ) {
      return {
        block: 'paragraph',
        content: text,
      };
    },
    heading ( text, level ) {
      let size;

      switch ( level ) {
      case 1:
        size = 'xxl';
        break;
      case 2:
        size = 'xl';
        break;
      case 3:
        size = 'l';
        break;
      case 4:
        size = 'm';
        break;
      case 5:
        size = 's';
        break;
      case 6:
        size = 'xs';
        break;
      default:
        size = 'm';
        break;
      }

      return {
        mods: { size },
        content: text,
      };
    },
  },
} );

block( 'root' ).replace()( ( node, ctx ) => {
  const level = ctx.level || 'desktop';
  const config = node.config = ctx.config;
  const data = node.data = ctx.data;
  const meta = data.meta || {};
  const og = meta.og || {};

  if ( ctx.context ) return ctx.context;

  node._urlFor = source => builder.image( source );
  node._fromMarkdown = markdown => markdownBemjson.convert( markdown );

  return {
    block: 'page',
    title: data.title || config.appName,
    favicon: '/favicon.ico',
    styles: { elem: 'css', url: `/assets/css/${ data.page }-${ level }.min.css` },
    scripts: { elem: 'js', url: `/assets/js/${ data.page }-${ level }.min.js` },
    head: [
      {
        elem: 'meta',
        attrs: {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      },

      // favicons
      {
        elem: 'link',
        attrs: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      },
      {
        elem: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
      },
      {
        elem: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
      },
      { elem: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
      {
        elem: 'link',
        attrs: {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
      },
      {
        elem: 'meta',
        attrs: { name: 'msapplication-TileColor', content: '#ffffff' },
      },
      { elem: 'meta', attrs: { name: 'theme-color', content: '#ffffff' } },

      // meta
      {
        elem: 'meta',
        attrs: { name: 'apple-mobile-web-app-title', content: config.appName },
      },
      {
        elem: 'meta',
        attrs: { name: 'application-name', content: config.appName },
      },
      {
        elem: 'meta',
        attrs: { name: 'description', content: meta.description },
      },
      {
        elem: 'meta',
        attrs: {
          property: 'og:title',
          content: og.title || data.title || config.appName,
        },
      },
      {
        elem: 'meta',
        attrs: { property: 'og:url', content: og.url || data.url.pathname },
      },
      { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      {
        elem: 'meta',
        attrs: { property: 'og:site_name', content: config.appName },
      },
      { elem: 'meta', attrs: { property: 'og:locale', content: 'ru_RU' } },
      { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
    ],
    mods: { route: data.view || data.page },
  };
} );
