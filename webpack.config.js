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
    target: 'web',
    devtool: 'nosources-source-map', // source-map or eval-source-map or nosources-source-map
    plugins: [hwp, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        port: 8686,
        hot: true,
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '/src')
        }
    },
    module: {
        rules: [
            {
                test:  /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            { 
                test: /\.css|.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { 
                test: /\.jpg|png|gif|ico$/,
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