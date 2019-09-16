'use strict';

var EOL = require('os').EOL;

module.exports = function() {
  return [
    '[ {',
    '  shouldDeps: [',
    '    { mods: { theme: \'*\' } },',
    '  ],',
    '} ]',
    ''
  ].join(EOL);
};
