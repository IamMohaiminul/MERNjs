'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './docs',
    port: 5000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './modules/app.js'
  ],
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
