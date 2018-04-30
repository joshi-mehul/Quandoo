var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '../src/index.js')
    ],
    mode: 'development',
    module: {
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname,  '../dist'),
        historyApiFallback: true,
        hot: true
    },
    output: {
        path: path.join(__dirname,  '../dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

};
