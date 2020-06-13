require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const DotENV = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const pluginList = [
  new DotENV(),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

if (process.env.NODE_ENV === 'production') {
  pluginList.push(new CompressionPlugin());
}

module.exports = {
  entry: {
    client: path.join(__dirname, 'client', 'index.jsx'),
    admin: path.join(__dirname, 'admin', 'index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)(\?.*$|$)/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: pluginList,
};
