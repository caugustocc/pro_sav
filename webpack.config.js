const path = require ('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './client/index.js',   
    output:{
        path: path.resolve(__dirname,'public'),
        filename: path.join('javascript','bundle.js'),
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
                                        targets: '> 0.25%, not dead',
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
                use: [MiniCssExtractPlugin.loader]
            }
        ]
    },
    Plugins: [new MiniCssExtractPlugin({
        filename:path.join('stylesheets', 'styles.css')
    })]
}