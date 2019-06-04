const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require("chalk");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, '../src/app.ts')],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  },
  target: "node",
  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
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
              configFile: path.resolve(__dirname, '../tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      { test: /\.ts?$/, loader: 'tslint-loader', enforce: 'pre', exclude: /(node_modules)/, }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      format: 'build [' + chalk.green.bold(':bar') + ']' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
      // width: 60
    })
  ]
}
