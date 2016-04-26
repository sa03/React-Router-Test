var webpack = require('webpack');  
var path = require('path');
//var WebpackMd5Hash = require('webpack-md5-hash');


module.exports = {  
    entry: [
      "./js/entry.js"
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
           { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader?stage=0'},
           { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=0'}
        ]
    }
    // plugins: [
    //     new WebpackMd5Hash()
    // ]
};