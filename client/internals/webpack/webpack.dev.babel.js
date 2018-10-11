import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  // new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
  }),
];

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  entry: [
    'webpack-dev-server/client?',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/index.jsx'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    minimize: false,
  },
  plugins,
  devtool: 'cheap-module-source-map', // eval-source-map
  devServer: {
    hot: true,
    historyApiFallback: true,
    proxy: [
      {
        path: '**',
        target: 'http://[::1]:8080',
        secure: false,
        changeOrigin: true,
      }
    ]
  },
  performance: {
    hints: false,
  },
});