const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


module.exports = merge(baseConfig, {
  devtool: "cheap-module-source-map",

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    }),
  ]
});

