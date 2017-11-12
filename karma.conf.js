const webpackConfig = require('./webpack.config.js');

// Chrome
const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision;
const Downloader = require('puppeteer/utils/ChromiumDownloader');
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);
process.env.CHROME_BIN = revisionInfo.executablePath;

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
