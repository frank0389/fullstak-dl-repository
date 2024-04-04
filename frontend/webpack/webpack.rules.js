module.exports = {
    rules: [
      { use: "babel-loader",
        test:  /\.(js|jsx)?$/,
        exclude: /node_modules/,
      },{
        test: /\.css$/i,
        use: ["style-loader", "css-loader","postcss-loader"],
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  };
