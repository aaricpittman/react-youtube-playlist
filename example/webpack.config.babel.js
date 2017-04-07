const {resolve} = require('path')

module.exports = {
  context: resolve('example'),
  entry: './index.js',

  output: {
    path: resolve('example/build'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    contentBase: resolve('example'),
    publicPath: '/build/',
    historyApiFallback: true,
  },
};