/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: [
    './tests/customerloginpage_test.js',
    './tests/customeraccountpage_test.js',
    './tests/transactionspage_test.js',
    './tests/depositpage_test.js',
    './tests/withdrawlpage_test.js',
    './tests/addcustomerpage_test.js',
    './tests/openaccauntpage_test.js',
    './tests/customerspage_test.js',

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
    config: "./framework/config/config.js",
    MainPage: "./framework/pages/MainPage.js",
    CustomerLoginPage: "./framework/pages/CustomerLoginPage.js",
    CustomerAccountPage: "./framework/pages/CustomerAccountPage.js",
    TransactionsPage: "./framework/pages/TransactionsPage.js",
    DepositPage: "./framework/pages/DepositPage.js",
    WithdrawlPage: "./framework/pages/WithdrawlPage.js",
    ManagerPage: "./framework/pages/ManagerPage.js",
    AddCustomerPage: "./framework/pages/AddCustomerPage.js",
    OpenAccountPage: "./framework/pages/OpenAccountPage.js",
    CustomersPage: "./framework/pages/CustomersPage.js",
    },
  name: 'otus-project'
}