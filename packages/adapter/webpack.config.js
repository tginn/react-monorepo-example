const builds = require('@example/builds');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 *  Webpack configuration to build the adapter
 */
let config = builds.webpack.common();

config.entry = {
    adapter: path.resolve(__dirname, 'src/index.js')
};

config.output = {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    library: 'adapter',
    libraryTarget: 'amd'
};

config.plugins.push(
    new ExtractTextPlugin('adapter.css')
);

module.exports = config;