const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const transferWebpackPlugin = require('transfer-webpack-plugin');
const {resolve} = require('path');


module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './source/js/root'
  ],
  output: {
    path: resolve(__dirname, './dist/javascript/'),
    publicPath: 'javascript/',
    filename: "build.js"
  },

  devtool: "eval",
  watch: true,

  devServer: {
    contentBase: resolve(__dirname, './dist/'),
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "babel-loader"
      },

      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
        }]
      }
    ],


  },
  plugins: [
    new transferWebpackPlugin([
      {
        from: './static',
        to: '../'
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    }),
    new HtmlWebpackPlugin({
      template: 'source/index.html',
      filename: '../index.html',
    })

  ]
};

