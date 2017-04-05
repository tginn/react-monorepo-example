const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSImport = require('postcss-smart-import');
const AutoPrefixer = require('autoprefixer');

const ENV = process.env.NODE_ENV || 'dev';
const isProd = ENV === 'production';

const BASE_PATH = process.cwd();

const POSTCSS_CONFIG = {
    plugins: () => [
        CSSImport(),
        AutoPrefixer({
            browsers: [
                'last 2 versions',
                'ie >= 10',
            ],
        }),
    ]
};

/**
 *  Shared webpack configuration for all builds
 */
const baseConfig = () => {
    let config = {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'url-loader?name=fonts/[name].[ext]'
                },
                {
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', {loader: 'postcss-loader', options: POSTCSS_CONFIG}]
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.html$/,
                    use: ['html-loader']
                }
            ],
        },
        resolve: {
            modules: [
                path.resolve(BASE_PATH, 'node_modules')
            ],
            extensions: [
                '.js',
                '.json',
                '.css',
                '.scss',
                '.html'
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(ENV)
                }
            })
        ]
    };
    
    if( isProd ){
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                beautify: false,
                output: {
                    comments: false
                },
                mangle: {
                    screw_ie8: true
                },
                compress: {
                    screw_ie8: true,
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                    negate_iife: false
                },
            })
        );
    }

    return config;
};

module.exports = baseConfig;