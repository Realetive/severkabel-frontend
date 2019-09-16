module.exports = {
  levels: [
    '**/*.blocks'
  ],

  excludePaths: [
    'node_modules/**'
  ],

  plugins: {
    'bemhint-fs-naming': false,
    'bemhint-deps-specification': true
  }
};