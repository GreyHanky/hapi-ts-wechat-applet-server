const path = require('path');
// const StartServerPlugin = require("start-server-webpack-plugin");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const ReloadServerPlugin = require('reload-server-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/app.ts','webpack/hot/signal'],
  // devtool:'cheap-module-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "node",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, './tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals({
    whitelist: ['webpack/hot/signal']
  })],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
