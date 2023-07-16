const { I } = inject();

module.exports = {

  locators:{
    homeButton: '//button[text()="Home"]',
    logoutButton: '//button[text()="Logout"]',
    transactionButton: '//button[@ng-click="transactions()"]',
    depositButton: '//button[@ng-click="deposit()"]',
    withdrawlButton: '//button[@ng-click="withdrawl()"]',
    accountNumberSelect: '//select[@name="accountSelect"]',
    customerSelect: '//select[@name="userSelect"]',
    customerLoginButton: '//button[text()="Customer Login"]',
  },

  isLogged(){
    I.waitForElement(this.locators.transactionButton)
    I.seeElement(this.locators.transactionButton)
    I.seeElement(this.locators.depositButton)
    I.seeElement(this.locators.withdrawlButton)    
  },
  
  goToLoginPage(){
    I.waitForElement(this.locators.homeButton, 5)
    I.click(this.locators.homeButton)
    I.waitForElement(this.locators.customerLoginButton, 5)
    I.seeElement(this.locators.customerLoginButton)
  },
  
  logout(){
    I.click(this.locators.logoutButton)
    I.seeElement(this.locators.customerSelect)
  },

  goToTransactions(){
    I.waitForElement(this.locators.transactionButton, 5)
    I.click(this.locators.transactionButton)
  },

  goToDeposit(){
    I.waitForElement(this.locators.depositButton, 5)
    I.click(this.locators.depositButton)
  }
}
  
