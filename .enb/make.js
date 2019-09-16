const fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  techs = require('./config/techs'),
  getLevels = require('./config/levels').getLevels,
  SETS = require('./config/levels').SETS,
  __DEV__ = process.env.NODE_ENV.toLowerCase() !== 'production';

module.exports = config => {
  ['css', 'js'].forEach( catalog => {
    pathToStatic = path.resolve('static', 'assets', catalog);
    fs.existsSync(pathToStatic) || mkdirp(pathToStatic);
  });

  const platforms = Object.keys(SETS);

  platforms.forEach( platform => {
    const levels = getLevels(platform);
    !__DEV__ || levels.push({ path: path.join('components', 'development.blocks'), check: true });

    config.nodes(`bundles/*-${ platform }`, nodeConfig => {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: levels }],
        [techs.fileProvider, { target: `?.bemdecl.js` }],
        [techs.bem.deps, { target: `?.deps.js` }],
        [techs.bem.files, { depsFile: `?.deps.js` }],

        // CSS
        [techs.postcss, {
          target: '?.css',
          oneOfSourceSuffixes: ['post.css', 'css'],
          plugins: techs.postcssPlugins,
        }],
        [techs.borschik, {
          minify: !__DEV__,
          freeze: true,
          source: '?.css',
          target: '?.min.css'
        }],
        [techs.fileCopy, {
          source: '?.min.css',
          target: '../../static/assets/css/?.min.css'
        }],

        // bemtree
        [techs.bemtree, {
          sourceSuffixes: ['bemtree', 'bemtree.js'],
          target: '.?.bemtree.prepare.js',
          // target: '?.bemtree.js',
        }],
        [techs.borschik, {
          source: '.?.bemtree.prepare.js',
          target: '?.bemtree.js',
          freeze: true,
          minify: false,
          comments: false,
        }],

        // templates
        [techs.bemhtml, {
          sourceSuffixes: ['bemhtml', 'bemhtml.js'],
          target: '.?.bemhtml.prepare.js',
          // target: '?.bemhtml.js',
          forceBaseTemplates: true,
          engineOptions: {
            elemJsInstances: true,
            runtimeLint: true,
          },
        }],
        [techs.borschik, {
          source: '.?.bemhtml.prepare.js',
          target: '?.bemhtml.js',
          freeze: true,
          minify: false,
          comments: false,
        }],

        // client templates
        [techs.bem.depsByTechToBemdecl, {
          target: '?.bemdecl.tmpl.js',
          sourceTech: 'js',
          destTech: 'bemhtml'
        }],
        [techs.bem.deps, {
          target: '?.tmpl.deps.js',
          bemdeclFile: '?.bemdecl.tmpl.js'
        }],
        [techs.bem.files, {
          depsFile: '?.tmpl.deps.js',
          filesTarget: '?.tmpl.files',
          dirsTarget: '?.tmpl.dirs'
        }],
        [techs.bemhtml, {
          target: '?.browser.bemhtml.js',
          filesTarget: '?.tmpl.files',
          sourceSuffixes: ['bemhtml', 'bemhtml.js'],
          engineOptions: { elemJsInstances: true }
        }],

        // js
        [techs.browserJs, { includeYM: true }],
        [techs.fileMerge, {
          target: '?.js',
          sources: ['?.browser.js', '?.browser.bemhtml.js']
        }],
        [techs.borschik, {
          source: '?.js',
          target: '?.min.js',
          minify: !__DEV__
        }],
        [techs.fileCopy, {
          source: '?.min.js',
          target: '../../static/assets/js/?.min.js'
        }]
      ]);

      nodeConfig.addTargets([
        '../../static/assets/css/?.min.css',
        '../../static/assets/js/?.min.js',
        '?.bemtree.js',
        '?.bemhtml.js',
      ]);
    } )
  })
}
