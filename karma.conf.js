const webpackConfig = require('./webpack.config.js');

// Chrome
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: ['tests.webpack.js'],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        noInfo: true
    },
    browsers: ['ChromeHeadless']
  })
};
