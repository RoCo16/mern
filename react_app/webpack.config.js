//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   query: {
    presets: [
        ["latest", {
        "es2015": false}],
        'react']
   }
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }]
 }
}
