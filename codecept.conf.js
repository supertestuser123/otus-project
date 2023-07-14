/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/mainpage_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: '',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    MainPage: "./framework/pages/MainPage.js",
  },
  name: 'otus-project'
}