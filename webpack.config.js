const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.jsx')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        configFile: './.eslintrc',
        failOnWarning: false,
        failOnError: true
      },
      exclude: /node_modules/
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.s?css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true
        }
      },
      {
        loader: 'sass-loader'
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.ejs'),
    title: 'K Gilles'
    // TODO: favicon
  })],
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
