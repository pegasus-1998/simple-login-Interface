const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const hwp = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',  // development or production
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/index.js'
    },
    devtool: 'nosources-source-map', // source-map or eval-source-map or nosources-source-map
    plugins: [hwp, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        port: 80
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '/src')
        }
    },
    module: {
        rules: [
            { 
                test: /\.css|.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { 
                test: /\.jpg|png|gif$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                      maxSize: 10 * 1024, 
                    }
                }
            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}