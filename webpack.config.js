var webpack = require('webpack');
var path = require('path');
//var WebpackMd5Hash = require('webpack-md5-hash');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: [
        "./js/entry.jsx"
    ],
    output: {
        path: 'build',
        publicPath: 'build/',
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]

};
