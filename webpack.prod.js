const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS  = {
    src: path.join(__dirname,'src'),
    dist: path.join(__dirname, 'dist')
}

module.exports = {
    entry: {
        main: path.resolve(PATHS.src,'js','main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: PATHS.dist
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', options: { importLoaders: 1}
                        },
                        'postcss-loader',
                        'fast-sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 10000,
                            name: '[name]-[hash:6].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg:{
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 4,
                            },
                            pngquant:{
                                quality: '75-90',
                                speed: 3,
                            },
                        }
                    }
                    ]
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