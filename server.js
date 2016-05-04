var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

var app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
    publicPath: '/_build/',
    stats: {
        colors: true,
        progress: true
    }
}))

var fs = require('fs')
var path = require('path')

fs.readdirSync(__dirname).forEach(function (file) {
    if (fs.statSync(path.join(__dirname, file)).isDirectory())
        app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
})

app.use(express.static(__dirname))

app.listen(8083, function () {
    console.log('Server listening on http://localhost:8083')
})
