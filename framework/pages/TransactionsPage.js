const { I } = inject();

module.exports = {

  locators:{
    backButton: '//button[text()="Back"]',
    transactionButton: '//button[@ng-click="transactions()"]',
  },

  isOnPage(){
    I.waitForElement(this.locators.backButton, 5)
    I.seeElement(this.locators.backButton)
  },
  goToAccountPage(){
    I.waitForElement(this.locators.backButton, 5)
    I.click(this.locators.backButton)
    I.waitForElement(this.locators.transactionButton, 5)
    I.seeElement(this.locators.transactionButton)
  }
}
