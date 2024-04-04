const path = require('path');
const plugins = require("./webpack.plugins.prod");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, '../dist'),
  },
  module: require("./webpack.prod.rules") ,
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      Images: path.resolve(__dirname, '../src/images/'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: plugins.plugins,
};
