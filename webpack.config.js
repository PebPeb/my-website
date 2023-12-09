
const path = require("path");
const fs = require('fs').promises;
const fs_2 = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Version Control

const propertiesFilePath = 'config.properties';
const propertiesFileContent = fs_2.readFileSync(propertiesFilePath, 'utf-8');
const NAVBAR_VERSION = ".v" + propertiesFileContent.match(/NAVBAR_VERSION\s*=\s*(.*)/)[1].trim(); 


const pelicanBuildPath = 'src/pelican_build/';

// Recursively searches though a given directory for .html files
// once found package 'navbar' bundle into it
async function findHtmlFilesRecursively(folderPath) {
  try {
    const files = await fs.readdir(folderPath);

    const htmlFiles = [];

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        // If it's a directory, recursively find HTML files
        const subdirectoryHtmlFiles = await findHtmlFilesRecursively(filePath);
        htmlFiles.push(...subdirectoryHtmlFiles);
      } else if (path.extname(file) === '.html') {
        // If it's an HTML file, add the packaged file to the array
        htmlFiles.push(
              new HtmlWebpackPlugin({
                template: filePath,
                filename: path.relative(pelicanBuildPath, filePath),
                chunks: ['navbar'],         // Add navbar bundle
              }));
      }
    }
  
    return htmlFiles;
  } catch (error) {
    console.error('Error reading folder:', error);
    return [];
  }
}


async function configureWebpack() {
  const multipleHtmlPlugins = await findHtmlFilesRecursively(pelicanBuildPath);
  // console.log(multipleHtmlPlugins);

  return {
    //entry: "./src/index.js",
    entry: {
      main: './src/index.js',
      navbar: './src/components/NavBar/render-NavBar.js',
    },
    output: {
      path: path.resolve(__dirname, 'build'),     // Output path
      filename: "bundles/[name]/[name].bundle" + NAVBAR_VERSION + ".js",        // Name of bundle
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
        },
      ]
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src', to: '',
          globOptions: {
            ignore: ['**/*.js'],
          }, }, 
          { from: 'src/pelican_build', to: '', 
          globOptions: {
            ignore: ['**/*.js', '**/*.html'],
          },}, 
        ],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
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
    ].concat(multipleHtmlPlugins),
    stats: {
      modules: true,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'build')
      },
      open: false,                         // Auto opens a webpage on start up
      port: 3002,
      historyApiFallback: true
    }
  }
}

module.exports = configureWebpack;
