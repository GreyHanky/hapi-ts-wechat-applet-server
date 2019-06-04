const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common,
  {
    mode: 'production',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../bundle')
    },
    plugins: [
      // new webpack.NoEmitOnErrorsPlugin()
    ]
  }
)
