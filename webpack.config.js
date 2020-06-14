require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const DotENV = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

let constants = {};
if (process.env.NODE_ENV === 'production') {
  constants = {
    devtool: 'cheap-module-source-map',
    output: {
      filename: '[name].bundle.min.js',
      sourceMapFilename: '[name].bundle.min.map',
    },
    MiniCssExtractPlugin: {
      filename: '[name].bundle.min.css',
      chunkFilename: '[id].bundle.min.css',
    },
  };
} else {
  constants = {
    devtool: 'source-map',
    output: {
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].bundle.map',
    },
    MiniCssExtractPlugin: {
      filename: '[name].bundle.css',
      chunkFilename: '[id].bundle.css',
    },
  };
}

const pluginList = [
  new DotENV(),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
  new MiniCssExtractPlugin({
    filename: constants.MiniCssExtractPlugin.filename,
    chunkFilename: constants.MiniCssExtractPlugin.chunkFilename,
    ignoreOrder: false,
  }),
];

if (process.env.NODE_ENV === 'production') {
  pluginList.push(new CompressionPlugin());
}

module.exports = {
  devtool: constants.devtool,
  entry: {
    client: path.join(__dirname, 'client', 'index.jsx'),
    admin: path.join(__dirname, 'admin', 'index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: constants.output.filename,
    sourceMapFilename: constants.output.sourceMapFilename,
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
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
