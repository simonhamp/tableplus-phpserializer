const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './main.js',
    output: {
        filename: 'PHPSerializer.js'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    stats: {
        colors: true
    },
    optimization: {
        minimize: true
    }
};

module.exports = config;