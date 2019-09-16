const path = require('path'),
  fs = require('fs'),
  SETS = JSON.parse(process.env.LEVELS);

function getLevels(platform) {
  let platformNames = SETS[platform],
    levels = [];

  platformNames.forEach((name) => {
    [ 'bem-core', 'bem-components', 'bem-forms' ].forEach( lib => {
      levels.push({ path: path.join('node_modules', lib, name + '.blocks'), check: false, });
    } );

    levels.push({ path: path.join('components', name + '.blocks'), check: true, });
    levels.push({ path: path.join('design', name + '.blocks'), check: true, });
  });

  return levels.filter((level) => {
    return fs.existsSync(level.path);
  });
}

module.exports = {
  getLevels: getLevels,
  SETS: SETS,
};
