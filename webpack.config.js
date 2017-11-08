let path = require('path');

var fs = require('fs');


module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs'
    },
    externals:[
        /^(?!\.|\/).+/i
    ],
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};