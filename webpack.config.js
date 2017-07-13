const webpack = require('webpack');

module.exports = {
  entry: "./source/js/root",
  output: {
    path: __dirname + '/dist',
    filename: "build.js"
  },
  watch: true,
  devtool: "eval",


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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })

  ]
};

