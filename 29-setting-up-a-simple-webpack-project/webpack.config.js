const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "eval-source-map",
  resolve: {
      extensions: [ ".js", ".ts", ".tsx"],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "babel-loader",
      exclude: /node-modules/,
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
