const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports = {
  entry: path.resolve(__dirname, 'client/index'),
  target: 'web',
  output: {
    path: `${__dirname}/dist/client`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist/client'),
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('style.css'),
    // new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, include: path.join(__dirname, 'client'), loaders: ['babel-loader'] },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(jpg|png|svg)$/, loader: 'url' },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
