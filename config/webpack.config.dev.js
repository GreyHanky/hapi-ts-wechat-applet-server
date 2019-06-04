const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config');
const nodeExternals = require('webpack-node-externals')
const ReloadServerPlugin = require('reload-server-webpack-plugin');

module.exports = merge(common,
  {
    mode: 'development',
    entry: ['webpack/hot/signal'],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../dist')
    },
    externals: [nodeExternals({
      whitelist: ['webpack/hot/signal']
    })],
    stats: "errors-only",
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ReloadServerPlugin({
        script: process.cwd() + "/dist/main.js",
      }),
    ],
    watch: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  }
)
