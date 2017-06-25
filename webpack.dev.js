const path = require('path');
const webpack =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS  = {
    src: path.join(__dirname,'src','js/main.js'),
    dist: path.join(__dirname, 'dist')
}

module.exports = {
    entry: {
        main: PATHS.src
    },
    output: {
        filename: '[name].bundle.js',
        path: PATHS.dist
    },
    devServer:{
        port: 9000,
        hot: true,
        compress: true,
        contentBase: PATHS.dist
    },
    devtool: "inline-source-map",
    module:{
        rules:[
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader','css-loader', 'fast-sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options:{
                        limit: 10000,
                        name: '[name]-[hash:6].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        
    ]

}