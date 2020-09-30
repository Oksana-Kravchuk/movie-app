const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 7000,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: { '^/api': '' },
        secure: false,
        // changeOrigin: true
      },
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
  },
});
