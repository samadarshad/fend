const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
require('dotenv').config()
const serverPort = process.env.PORT;

module.exports = {
    entry: {
        index: ['./src/client/index.js']
    },
    mode: 'production',
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    node : {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new WorkboxPlugin.GenerateSW(),
        new webpack.DefinePlugin({
            "serverPort": serverPort
        })
    ]
}
