const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    module:{
        rules:[
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'fast-sass-loader']
                })
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
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),

    ]

}