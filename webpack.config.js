const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

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
      exclude: /node_modules/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: (loader) => [
              require('postcss-import')({ root: loader.resourcePath }),
              require('postcss-preset-env')(),
              require('cssnano')()
            ]
          }
        }
      ]
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ]
};

module.exports = config;