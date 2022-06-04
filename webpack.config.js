const path = require ('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EsLintWebPackPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry: './client/index.js',   
    output:{
        path: path.resolve(__dirname,'public'),
        filename: path.join('javascripts','bundle.js'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                 test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        modules: false,
                                        useBuiltIns: 'usage',
                                        targets: {
                                            chrome:"80"
                                        },
                                        corejs: 3
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: path.join('stylesheets','styles.css')
    }),
    new EsLintWebPackPlugin()
]
};