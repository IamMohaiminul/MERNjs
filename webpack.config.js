'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './modules/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        include: __dirname,
        loaders: ['style', 'css', 'sass'],
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: __dirname,
        loaders: ['babel'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
