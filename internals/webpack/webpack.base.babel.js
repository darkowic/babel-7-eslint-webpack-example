/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');

module.exports = function (options) {
  return {
    entry: options.entry,
    output: Object.assign({ // Compile into js/build.js
      path: path.resolve(process.cwd(), 'dist'),
    }, options.output), // Merge with env dependent settings
    module: {
      rules: [{
        test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      }],
    },
    resolve: {
      modules: [
        path.resolve(process.cwd(), 'src'),
        'node_modules',
      ],
      extensions: [
        '.js',
        '.jsx',
        '.react.js',
        '.css',
      ],
      mainFields: [
        'browser',
        'jsnext:main',
        'main',
      ],
    },
  };
};
