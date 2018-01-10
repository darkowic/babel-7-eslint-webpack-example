const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./../config');

module.exports = {
  entry: {
    main: path.join(process.cwd(), 'src/app.js'),
    vendor: config.vendors,
  },

  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  }, {}), // Merge with env dependent settings

  module: {
    rules: [{
      test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    }],
  },
  plugins: [
    // Issue with proper hashing in webapck https://github.com/webpack/webpack/issues/1315
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ],
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
