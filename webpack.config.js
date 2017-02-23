var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './app/main.js',
    devtool: 'cheap-module-eval-source-map',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPath: 'http://localhost:8080/build/'
    },

    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'stage-0'],
              }
              //plugins: ['transform-class-properties']
            },
            { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    }
};
