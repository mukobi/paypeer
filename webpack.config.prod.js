const config = require('./webpack.config.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyes-webpack-plugin');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  new UglifyJsPlugin({
    test: /\.js($|\?)/i,
    sourceMap: true,
    compress: {
      warnings: false
    }
  })
);

module.exports = config;