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
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          plugins: ['transform-object-rest-spread'],
          presets: [[
            'env', {
              targets: {
                browsers: [
                  '> 1%',
                  'Last 2 versions',
                  'IE 10'
                ]
              }
            }],
            'react'
          ]
        }
      }]
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
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader?name=[name].[ext]'
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
