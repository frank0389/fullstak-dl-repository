const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    rules: [
      { use: "babel-loader",
        test:  /\.(js|jsx)?$/,
        exclude: /node_modules/,
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      }
    ]
  };
