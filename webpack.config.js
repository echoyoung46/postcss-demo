const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  mode: 'production',
  entry: [
    __dirname + '/src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src',
    publicPath: '/'
  },
  context: __dirname + '/src',
  devServer: {
    compress: true,
    contentBase: __dirname + '/src',
    publicPath: '/',
    port: 8080,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract('style-loader', 'css-loader?modules', 'postcss-loader')
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("global.css")
  ]
};

module.exports = config;