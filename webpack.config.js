const path = require("path");

// Helps to connect js files,
// so there is no need to connect JS files to SRC html
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Clean up dist folder from unneccessary files
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // Tells where there source files are located
  context: path.resolve(__dirname, "src"),
  // Current state of project
  mode: "development",
  // Entry point of a project
  // * We can also define multiple entry points
  entry: "./index.js",
  output: {
    // Output file
    // * if there are multiple entry points,
    // you need to give them different naming patterns
    // Example: filename: '[name].[contenthash].js'
    filename: "bundle.js",
    // Setting container output folder
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // If you don't want to type some extensions while importing it,
    // then just add it to extensions array.
    // ".js" && ".json" are defaults, even if don't have extensions section.
    // But if you have it, don't leave it blank
    extensions: [".js", ".json"],
    // Helps with accessing files by adding alias to folder.
    // I understand it as a checkpoint, from which you can access stuff
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    // You have to initialize it with 'new' syntax
    new HtmlWebpackPlugin({
      // Editing document title
      // title: "Webpack Intro", --doesn't work if template presents

      // To transfer data from SRC html to DIST html
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  // Apply loaders
  module: {
    /* By default webpack only recognizes 2 types of files: .js && .json
      So if you struggling with loading some new types other than those,
      you need to add them to rules to be able to read them */
    rules: [
      {
        // CSS
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Pictures
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: ["file-loader"],
      },
      {
        // Fonts
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
};
