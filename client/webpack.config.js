'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './modules/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname)
        ],
        loaders: ['babel']
      }, {
        test: /\.(css|scss)$/,
        include: [
          path.resolve(__dirname)
        ],
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader', 'sass-loader')
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        include: [
          path.resolve(__dirname)
        ],
        loader: 'url-loader?limit=10000&name=images/[name].[ext]'
      }, {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        include: [
          path.resolve(__dirname)
        ],
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('default'),
        'API_URL': JSON.stringify('http://localhost:8080/')
      }
    }),
    new extractTextWebpackPlugin('bundle.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
};
