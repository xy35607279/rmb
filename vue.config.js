module.exports = {
  chainWebpack: (config) => {
    // const eslintConfig = config.module.rule('eslint');
    // eslintConfig.use('eslint-loader')
    //   .loader('eslint-loader')
    //   .tap((args) => {
    //     const opt = { ...args };
    //     opt.cache = false;
    //     return opt;
    //   });

    // vue don't use cache-loader
    config.module.rule('vue').uses.delete('cache-loader');

    // js don't use cache-loader
    config.module.rule('js').uses.delete('cache-loader');
  },

  lintOnSave: true,

  devServer: {
    // When using inline mode, the console in your DevTools will show you messages e.g. before reloading
    clientLogLevel: 'warning',
    // Enable webpack's Hot Module Replacement feature
    hot: true,
    // Tells dev-server to open the browser after server had been started.
    open: true,
    port: 8080,
    proxy: {
      '/optg': {
        target: 'https://test.17ebank.com:9099/mobilegw',
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
          '^/optg': ''
        }
      },
      '/sign': {
        target: 'http://132.232.51.21:8080/safe',
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
          '^/sign': ''
        }
      }
    },
    // Shows a full-screen overlay in the browser when there are compiler errors, compiler warnings don't show overlay.
    overlay: {
      warnings: false,
      errors: true
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'zh-CN',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
