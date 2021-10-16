const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "babel-loader",
          {
            loader: require("styled-jsx/webpack").loader,
            options: {
              type: "scoped",
            },
          },
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "svg-url-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    static: "./dist",
    port: "3000",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss", ".css"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src", "index.html"),
    }),
  ],
};
