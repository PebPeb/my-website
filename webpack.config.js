
const path = require("path");
const fs = require('fs').promises;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// var HtmlWebpackInlineSourcePlugin = require("@effortlessmotion/html-webpack-inline-source-plugin");


// let multipleHtmlPlugins = htmlPageNames.map(name => {
//   return new HtmlWebpackPlugin({
//     template: `public/projects/${name}.html`, // relative path to the HTML files
//     filename: `projects/${name}.html`, // output HTML files
//     chunks: ['navbar'] // respective JS files (assuming you have corresponding chunk files)
//   });
// });


const pelicanBuildPath = 'src/pelican_build/'; // Replace with the actual path to your folder
 
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
        // If it's an HTML file, add its path to the array
        htmlFiles.push(
              new HtmlWebpackPlugin({
                template: filePath,
                filename: path.relative(pelicanBuildPath, filePath),
                chunks: ['navbar'],
              }));
      }
    }

    return htmlFiles;
  } catch (error) {
    console.error('Error reading folder:', error);
    return [];
  }
}

// Example usage:
// const multipleHtmlPlugins = await findHtmlFilesRecursively(pelicanBuildPath);
  // .then(htmlFiles => {
  //   console.log('HTML files:', htmlFiles);
  // })
  // .catch(error => {
  //   console.error('Error finding HTML files:', error);
  // });

// console.log(multipleHtmlPlugins)

// module.exports = {
//   //entry: "./src/index.js",
//   entry: {
//     main: './src/index.js',
//     navbar: './src/components/NavBar/render-NavBar.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),     // Output path
//     filename: "bundles/[name]/[name].bundle.[contenthash].js",        // Name of bundle
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader"]
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             outputPath: 'assets/images',
//           }
//         }]
//       },
//       {
//         test: /\.html$/,
//         use: ['html-loader']
//       }
//     ]
//   },
  

//   plugins: [
//     new CopyWebpackPlugin({
//       patterns: [
//         { from: 'src', to: 'src',
//         globOptions: {
//           ignore: ['**/*.js'],
//         }, }, 
//         { from: 'src/pelican_build', to: '', 
//         globOptions: {
//           ignore: ['**/*.js', '**/*.html'],
//         },}, 
//       ],
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'main.[contenthash].css'
//     }),
//     new HtmlWebpackPlugin({
//       template: "public/index.html",
//       filename: 'index.html',
//       chunks: ['main']
//     }),
//     new HtmlWebpackPlugin({
//       template: "public/test.html",
//       filename: 'test.html',
//       chunks: ['navbar']
//     }),
//     // new HtmlWebpackPlugin({
//     //   template: "src/pelican_build/posts/index.html",
//     //   filename: 'posts/index.html',
//     //   chunks: ['navbar'],
//     // }),
//   ].concat(multipleHtmlPlugins),
//   stats: {
//     modules: true,
//   },
//   devServer: {
//     static: {
//       directory: path.resolve(__dirname, 'build')
//     },
//     open: true,                         // Auto opens a webpage on start up
//     port: 3002,
//     historyApiFallback: true
//   }
// };













async function configureWebpack() {
  const multipleHtmlPlugins = await findHtmlFilesRecursively(pelicanBuildPath);

  console.log(multipleHtmlPlugins);

  return {
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
      // new HtmlWebpackPlugin({
      //   template: "src/pelican_build/posts/index.html",
      //   filename: 'posts/index.html',
      //   chunks: ['navbar'],
      // }),
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
  }
}

module.exports = configureWebpack;
