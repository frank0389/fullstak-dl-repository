const path = require('path');
const plugins = require("./webpack.plugins");

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    clean:true,
  },
  module: require("./webpack.rules") , 
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      Images: path.resolve(__dirname, '../src/images/'),
    },
  },  
  plugins: plugins.plugins,
  devtool: "eval-source-map",
};
