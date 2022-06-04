const path = require ('path');
module.exports = {
    entry: './client/index.js',
    output:{
        path: path.resolve(__dirname,'public'),
        filename: path.join('javascript','bundle.js'),
        publicPath: '/',
    },
    devServer: {
        static: path.join(__dirname,'public'),
        port: 8080,
        host:'localhost'
    }
}