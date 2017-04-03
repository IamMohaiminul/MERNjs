var path = require('path');
var config = require('config');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

var constants = {};
if (config.util.getEnv('NODE_ENV') == 'production') {
  constants = {
    devtool: 'cheap-module-source-map',
    output: {
      filename: '[name].bundle.min.js',
      sourceMapFilename: '[name].bundle.min.map',
    },
    plugins: {
      filename: '[name].bundle.min.css',
    },
  };
} else {
  constants = {
    devtool: 'eval',
    output: {
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].bundle.map',
    },
    plugins: {
      filename: '[name].bundle.css',
    },
  };
}

var plugins = [
  new CleanWebpackPlugin(['dist'], {
    root: path.join(__dirname, 'public'),
    verbose: true,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(config.util.getEnv('NODE_ENV')),
      BASE_URL: JSON.stringify(config.get('BASE_URL')),
      API_URL: JSON.stringify(config.get('API_URL')),
    },
  }),
  new ExtractTextPlugin(constants.plugins.filename),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

if (config.util.getEnv('NODE_ENV') == 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    })
  );
  plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  plugins.push(
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    })
  );
}

module.exports = {
  devtool: constants.devtool,
  entry: {
    client: './client/index.jsx',
    admin: './admin/index.jsx',
  },
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: constants.output.filename,
    sourceMapFilename: constants.output.sourceMapFilename,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[ext]',
          },
        },
      }, {
        test: /\.(svg|eot|woff|woff2|ttf)(\?.*$|$)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: plugins,
};
