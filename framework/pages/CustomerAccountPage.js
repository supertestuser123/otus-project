const { I } = inject();

module.exports = {

  locators:{
    homeButton: '//button[text()="Home"]',
    logoutButton: '//button[text()="Logout"]',
    transactionButton: '//button[@ng-click="transactions()"]',
    depositButton: '//button[@ng-click="deposit()"]',
    withdrawlButton: '//button[@ng-click="withdrawl()"]',
    accountNumberSelect: '//select[@name="accountSelect"]',
  },

  isLogged(){
    I.waitForElement(this.locators.transactionButton)
    I.seeElement(this.locators.transactionButton)
    I.seeElement(this.locators.depositButton)
    I.seeElement(this.locators.withdrawlButton)    
  }  
}
  
