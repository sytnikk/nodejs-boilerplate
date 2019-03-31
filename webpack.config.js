const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs');

module.exports = {
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: {
        server: './src/server/server.ts',
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
        modules: ['node_modules']
    },
    output: {
        publicPath: '/build/',
        path: path.join(__dirname, '/build/server'),
        filename: '[name].build.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            { 
                test: /\.ts$/, 
                loader: 'ts-loader'
            }
        ]
    },
    stats: {
        warnings: false
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'./src/views',to:'../views'},
            {from:'./src/assets',to:'../assets'},
        ]),
    ]
};