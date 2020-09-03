const {merge} = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        proxy: {
            '/api': {
              target: 'http://localhost:7000',
              pathRewrite: {'^/api' : ''},
              secure: false,
              changeOrigin: true
            }
        },
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        compress: true,
        port: 7000,
        hot: true
    }
});