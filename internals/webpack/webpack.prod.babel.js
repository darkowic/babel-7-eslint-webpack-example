/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./../config');


module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: {
    main: path.join(process.cwd(), 'src/app.js'),
    vendor: config.vendors,
  },

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
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
});
