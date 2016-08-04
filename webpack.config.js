'use strict';

module.exports = {
  devServer: {
    inline: true,
    contentBase: './docs',
    port: 5000
  },
  entry: './modules/app.js',
  output: {
    path: './public/javascripts',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
