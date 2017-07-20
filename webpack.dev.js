const webpack = require('webpack');
const {resolve} = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


module.exports = merge(baseConfig,{
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],

  devtool: "inline-source-map",

  devServer: {
    contentBase: resolve(__dirname, './dist/'),
    port: 8080,
    host: '0.0.0.0',
    // historyApiFallback: true,
  }
});

