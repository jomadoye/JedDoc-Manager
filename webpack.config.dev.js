import path from 'path';
import webpack from 'webpack';

export default {
  // devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, './client/index.js'),
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'server/shared/'),
      ],
      loader: ['react-hot-loader', 'babel-loader'],
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  node: {
    net: 'empty',
    dns: 'empty',
  },
};
