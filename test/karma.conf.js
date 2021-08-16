const webpackConfig = require('@vue/cli-service/webpack.config.js');

delete webpackConfig.entry;

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],

    files: ['./unit/index.js'],
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    },
    preprocessors: {
      './unit/index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    browsers: ['Chrome']
  });
};
