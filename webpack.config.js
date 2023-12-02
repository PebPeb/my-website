
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// var HtmlWebpackInlineSourcePlugin = require("@effortlessmotion/html-webpack-inline-source-plugin");

let htmlPageNames = [];

let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `public/projects/${name}.html`, // relative path to the HTML files
    filename: `projects/${name}.html`, // output HTML files
    chunks: ['navbar'] // respective JS files (assuming you have corresponding chunk files)
  });
});


module.exports = {
  //entry: "./src/index.js",
  entry: {
    main: './src/index.js',
    navbar: './src/components/NavBar/render-NavBar.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),     // Output path
    filename: "bundles/[name]/[name].bundle.[contenthash].js",        // Name of bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          }
        }]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src', to: 'src' }, 
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: "public/test.html",
      filename: 'test.html',
      chunks: ['navbar']
    }),
    new HtmlWebpackPlugin({
      template: "src/pelican/output/index.html",
      filename: 'src/pelican/output/test2.html',
      chunks: ['navbar'],
    }),
    // new HtmlWebpackInlineSourcePlugin(),
  ].concat(multipleHtmlPlugins),
  stats: {
    modules: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    open: true,                         // Auto opens a webpage on start up
    port: 3002,
    historyApiFallback: true
  }
};