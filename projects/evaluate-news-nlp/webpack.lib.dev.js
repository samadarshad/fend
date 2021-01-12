const path = require('path')

module.exports = {
    entry: './src/client/ClientLib.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    resolve: {
        alias: {
            Shared: path.resolve(__dirname, 'src/shared/')
        }
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
