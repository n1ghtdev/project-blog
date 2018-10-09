const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack/webpack.base.babel.js');
const path = require('path');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: 'www',
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
});
server.listen(3000, 'localhost', function() {});