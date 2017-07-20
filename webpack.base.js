const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const transferWebpackPlugin = require('transfer-webpack-plugin');
const {resolve} = require('path');


module.exports = {
  entry: [
    'babel-polyfill',
    './source/js/root'
  ],
  output: {
    path: resolve(__dirname, './dist/javascript/'),
    publicPath: 'javascript/',
    filename: "build.js"
  },

  watch: true,

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
    new HtmlWebpackPlugin({
      template: 'source/index.html',
      filename: '../index.html',
    })

  ]
};

