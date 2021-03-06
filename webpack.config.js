const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Antz Development"
    }),
    new HardSourceWebpackPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development"
};
