const path = require('path');

export default {
  // devtools: 'eval-source-map',
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loader: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
