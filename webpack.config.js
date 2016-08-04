module.exports = {
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
