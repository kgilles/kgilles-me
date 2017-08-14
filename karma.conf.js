const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: ['tests.webpack.js'],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    webpackMiddleware: {
        noInfo: true
    },
    webpack: webpackConfig,
    browsers: ['PhantomJS']
  })
};
