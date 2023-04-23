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

module.exports = {
  //entry: "./src/index.js",
  entry: {
    main: './src/index.js',
    testing: './src/index.js'
    //... repeat until example 4
  },
  output: {
    //path: path.resolve(__dirname, "dist"),
    path: path.join(__dirname, '/bundle'),
    //filename: "bundle.js",
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{loader: 'file-loader',}]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      //filename: 'index.[hash].html',
      chunks: ['main']
    })/*,
    new HtmlWebpackPlugin({
      template: "./public/test.html",
      //filename: 'test.[hash].html',
      chunks: ['testing']
    })*/
  ]
  /*
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ['main']
    })
  ].concat(multipleHtmlPlugins)
  */
};
