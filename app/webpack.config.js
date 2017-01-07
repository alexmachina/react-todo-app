var path = require('path');
var webpack = require('webpack');

module.exports = {

  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],

  entry: './main.js',
  output: {path: __dirname, filename:'bundle.js'},

  module:{
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
}
