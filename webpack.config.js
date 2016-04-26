var webpack = require('webpack');
var path = require('path');
//var WebpackMd5Hash = require('webpack-md5-hash');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      "./js/entry.jsx"
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url?limit=25000'
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
    plugins: [
    //    new WebpackMd5Hash()
    ]
};
