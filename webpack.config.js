const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-proposal-class-properties')]
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/css/', to: 'css/'},
            { from: './src/fonts/', to: 'fonts/'}
        ]),
        new HtmlWebpackPlugin({
            title: 'New Relic challenge',
            template: './src/html/index.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['./css/main.css'],
            append: true
        })
    ]
};