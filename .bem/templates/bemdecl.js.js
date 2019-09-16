'use strict';

var EOL = require('os').EOL;

module.exports = function(entity) {
  var route = entity.block.split('-')[0];

  return [
    "exports.blocks = [",
    "  { name: 'root' },",
    "  {",
    "    name: 'page',",
    "    mods: [",
    "      {",
    "        name: 'route',",
    "        vals: [",
    "          { name: '" + route + "' }",
    "        ]",
    "      }",
    "    ]",
    "  }",
    "];",
    ""
  ].join(EOL);
};


