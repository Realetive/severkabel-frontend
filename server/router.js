const UniversalRouter = require( 'universal-router' );
const generateUrls = require( 'universal-router/generateUrls' );

const { langs: [ lang ] } = require( './config' );
const home = require( './routes/home' );
const error = require( './routes/error' );
const about = require( './routes/about' );
const innovations = require( './routes/innovations' );
const innovation = require( './routes/innovation' );
const events = require( './routes/events' );
const event = require( './routes/event' );
const contacts = require( './routes/contacts' );
const thanks = require( './routes/thanks' );
const policy = require( './routes/policy' );
const projects = require( './routes/projects' );
const project = require( './routes/project' );


const router = new UniversalRouter(
  {
    path: '',
    name: 'root',
    children: [
      {
        path: '',
        name: 'index',
        load: async () => await home,
      },
      {
        path: '/projects',
        children: [
          {
            path: '',
            name: 'projects',
            load: async () => await projects,
          },
          {
            path: '/:project',
            name: 'project',
            load: async () => await project,
          },
        ],
      },
      {
        path: '/about',
        name: 'about',
        load: async () => await about,
      },
      {
        path: '/innovations',
        children: [
          {
            path: '',
            name: 'innovations',
            load: async () => await innovations,
          },
          {
            path: '/:innovation',
            name: 'innovation',
            load: async () => await innovation,
          },
        ],
      },
      {
        path: '/events',
        children: [
          {
            path: '',
            name: 'events',
            load: async () => await events,
          },
          {
            path: '/:event',
            name: 'event',
            load: async () => await event,
          },
        ],
      },
      {
        path: '/contacts',
        name: 'contacts',
        load: async () => await contacts,
      },
      {
        path: '/thanks',
        name: 'thanks',
        load: async () => await thanks,
      },
      {
        path: '/policy',
        name: 'policy',
        load: async () => await policy,
      },
      {
        path: lang === 'en' ? '/ru' : '/en',
        name: 'lang',
        action: () => ( { redirect: `https://${ lang === 'en' ? '' : 'en.' }nordgrid.ru` } ),
      },

      {
        path: '(.*)',
        name: '404',
        load: async () => await error,
      },
    ],

    async action ( { next } ) {
      const route = await next() || {};

      return route;
    },
  },
  {
    resolveRoute ( context, params ) {
      params.urlTo = generateUrls( context.router );
      params._name = context.route.name;

      if ( typeof context.route.load === 'function' ) {
        return context.route.load().then( action => action( context, params ) );
      }
      if ( typeof context.route.action === 'function' ) {
        return context.route.action( context, params );
      }
      return undefined;
    },
  }
);

module.exports = router;
