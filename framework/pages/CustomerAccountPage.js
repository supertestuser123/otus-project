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
  },

  isLogged(){
    I.waitForElement(this.locators.transactionButton)
    I.seeElement(this.locators.transactionButton)
    I.seeElement(this.locators.depositButton)
    I.seeElement(this.locators.withdrawlButton)    
  },
  logout(){
    I.click(this.locators.logoutButton)
    I.seeElement(this.locators.customerSelect)
  }

}
  
