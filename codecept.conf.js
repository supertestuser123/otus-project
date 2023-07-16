/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: [
    // './tests/customerloginpage_test.js',
    // './tests/customeraccountpage_test.js',
    // './tests/transactionspage_test.js',
    './tests/depositpage_test.js',
  ],
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
    CustomerLoginPage: "./framework/pages/CustomerLoginPage.js",
    CustomerAccountPage: "./framework/pages/CustomerAccountPage.js",
    TransactionsPage: "./framework/pages/TransactionsPage.js",
    DepositPage: "./framework/pages/DepositPage.js",
  },
  name: 'otus-project'
}