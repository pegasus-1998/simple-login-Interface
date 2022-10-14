const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const hwp = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})
module.exports = {
    mode: 'development',  // development or production
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [hwp],
    devServer: {
        open: true,
        port: 80
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=5000'},
            { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/'}
        ]
    }
}