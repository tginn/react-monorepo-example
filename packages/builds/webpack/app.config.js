const commonConfig = require('./common.config');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const BASE_PATH = process.cwd();

/**
 * Creates the webpack configuration to build the given app.
 * @param app Name of the app
 * @returns webpack configuration
 */
const appConfig = app => {
    let config = commonConfig();

    config.entry = {};
    config.entry[app] = path.resolve(BASE_PATH, 'src/index.js');

    config.output = {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(BASE_PATH, 'dist')
    };

    config.plugins.push(
        new ExtractTextPlugin('[name].css'),
        new HTMLWebpackPlugin({
            filename: `${app}.html`,
            template: path.resolve(BASE_PATH, 'src/index.html')
        })
    );

    return config;
};

module.exports = appConfig;