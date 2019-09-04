// Karma configuration
// Generated on Sun Aug 04 2019 11:43:23 GMT+0800 (GMT+08:00)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'tests/unit/**/*.spec.js',
    ],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'tests/unit/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
      mode: 'development',
      watch: false,
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$|\.jsx$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'post',
            exclude: /node_modules|\.spec\.js$/,
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul', 'sonarqube'],

    coverageIstanbulReporter: {
      // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
      reports: ['html', 'text-summary', 'lcov'],

      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: require('path').join(__dirname, 'docs/coverage'),

      // Combines coverage information from multiple browsers into one report rather than outputting a report
      // for each browser.
      combineBrowserReports: true,

      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,

      // Omit files with no statements, no functions and no branches from the report
      skipFilesWithNoCoverage: true,

      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      },
    },

    sonarqubeReporter: {
      basePath: 'tests/unit',        // test files folder
      filePattern: '**/*.spec.js', // test files glob pattern
      encoding: 'utf-8',          // test files encoding
      outputFolder: 'docs/reports',    // report destination
      legacyMode: false,          // report for Sonarqube < 6.2 (disabled)
      reportName: (metadata) => { // report name callback
        /**
         * Report metadata array:
         * - metadata[0] = browser name
         * - metadata[1] = browser version
         * - metadata[2] = plataform name
         * - metadata[3] = plataform version
         */
        return metadata.concat('xml').join('.');
      }
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
      "karma-sourcemap-loader",
      'karma-coverage-istanbul-reporter',
      require('karma-sonarqube-reporter')
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
