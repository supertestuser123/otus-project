const { I } = inject();

module.exports = {

  locators:{
    depositButton: '//button[text()="Deposit"]',
    amountField: '//input[@ng-model="amount"]',
    successfulDepositSpan: '//span[@ng-show="message" and text()="Deposit Successful"]'
  },

  deposit(){
    I.waitForElement(this.locators.depositButton, 5)
    I.fillField(this.locators.amountField, '100')
    I.click(this.locators.depositButton)
    I.waitForElement(this.locators.successfulDepositSpan, 5)
    I.seeElement(this.locators.successfulDepositSpan)
  }
}
