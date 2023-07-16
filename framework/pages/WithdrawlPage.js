const { I } = inject();

module.exports = {

  locators:{
    withdrawButton: '//button[text()="Withdraw"]',
    amountField: '//input[@ng-model="amount"]',
    successfulWithdrawSpan: '//span[@ng-show="message" and text()="Transaction successful"]'
  },

  withdrawl(){
    I.waitForElement(this.locators.withdrawButton, 5)
    I.fillField(this.locators.amountField, '100')
    I.click(this.locators.withdrawButton)
    I.waitForElement(this.locators.successfulWithdrawSpan, 5)
    I.seeElement(this.locators.successfulWithdrawSpan)
  }
}
