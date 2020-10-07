require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const DotENV = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const pluginList = [
  new DotENV({ systemvars: true }),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
  new MiniCssExtractPlugin({
    filename: process.env.NODE_ENV === 'production' ? '[name].bundle.min.css' : '[name].bundle.css',
    chunkFilename: process.env.NODE_ENV === 'production' ? '[id].bundle.min.css' : '[id].bundle.css',
    ignoreOrder: false,
  }),
];

if (process.env.NODE_ENV === 'production') {
  pluginList.push(new CompressionPlugin());
}

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: {
    client: path.join(__dirname, 'client', 'index.jsx'),
    admin: path.join(__dirname, 'admin', 'index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: process.env.NODE_ENV === 'production' ? '[name].bundle.min.js' : '[name].bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
