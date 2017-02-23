var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './app/main.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'http://localhost:8080/build/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  }
};
