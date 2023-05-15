
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
let htmlPageNames = ['test'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

*/

let htmlPageNames = ['Single-Cycle-RV32I'];

let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `public/projects/${name}.html`, // relative path to the HTML files
    filename: `/projects/${name}.html`, // output HTML files
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
    filename: "[name]/[name].bundle.js",        // Name of bundle
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
        use: ["style-loader", "css-loader"]
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
    // new HtmlWebpackPlugin({
    //   template: "public/testing/test2.html",
    //   filename: 'testing/test2.html',
    //   chunks: ['navbar']
    // }),
    // new HtmlWebpackPlugin({       // Do i need to add the supporting CSS and JS to the chunks?
    //   template: "public/projects/Single-Cycle-RV32I.html",
    //   filename: 'projects/Single-Cycle-RV32I.html',
    //   chunks: ['navbar']
    // })
  
  ],
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