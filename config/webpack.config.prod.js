const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: ['./src/app.ts'],
  // devtool:'cheap-module-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../bundle')
  },x
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
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
