'use strict';

var EOL = require('os').EOL;

module.exports = function(entity) {
  var elemPart = entity.elem ? ".elem(" + entity.elem + ")" : '',
    modVal = entity.modVal || '',
    modPart = entity.modName ? ".mod(" + entity.modName + ( typeof modVal === 'boolean' ? '' : " " + modVal ) + ")" : '';

  return [
  "block(" + entity.block + ")" +
    (entity.modName && !entity.elem ? modPart : '') +
    (entity.elem ? elemPart : '') +
    (entity.elem && entity.modName ? modPart : '') + " {",
    "  ",
    "}"
  ].join(EOL);
};
