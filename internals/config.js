const pkg = require('./../package.json');

const EditorConfig = {
  version: pkg.version,

  vendors: Object.keys(pkg.dependencies).filter(name => ([
    // polyfill is handled by babel-preset-env
    '@babel/polyfill',
    '@babel/runtime',
    // Here you can add dependencies that should be excluded from vendor file
  ].indexOf(name) === -1)),
};

module.exports = EditorConfig;
