const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    //path: path.resolve(__dirname, "dist"),
    path: path.join(__dirname, '/bundle'),
    filename: "bundle.js",
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
  }
};
