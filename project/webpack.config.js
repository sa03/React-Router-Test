// var webpack = require('webpack');
// var path = require('path');
// //var WebpackMd5Hash = require('webpack-md5-hash');
// //var ExtractTextPlugin = require('extract-text-webpack-plugin');


// module.exports = {
//     entry: [
//         "./app.jsx"
//     ],
//     output: {
//         path: 'build',
//         publicPath: 'build/',
//         filename: "bundle.js"
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.css$/,
//                 loader: 'style!css'
//             }, {
//                 test: /\.scss$/,
//                 loader: 'style!css!sass'
//             },
//             {
//                 test: /\.(png|jpg)$/,
//                 loader: 'url?limit=8192'
//             },
//             {
//                 test: /\.jsx$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader?stage=0'
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader?stage=0'
//             }

//         ]
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: JSON.stringify("production")
//             }
//         })
//     ]

// };


/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
    if (fs.statSync(path.join(__dirname, dir)).isDirectory())
      entries[dir] = path.join(__dirname, dir, 'app.js')

    return entries
  }, {}),

  output: {
    path: __dirname + '/_build',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/_build/'
  },

  module: {
    loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0'
            }

        ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
