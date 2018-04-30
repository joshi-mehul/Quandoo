var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '../src/index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }
        ]
    },
};
