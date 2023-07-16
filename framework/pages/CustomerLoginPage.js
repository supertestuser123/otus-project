const { I } = inject();

module.exports = {

  locators:{
    customerSelect: '//select[@name="userSelect"]',
    loginButton: '//button[text()="Login"]',
  },

  selectFirstUser(){
    I.waitForElement(this.locators.customerSelect, 5)
    I.selectOption(this.locators.customerSelect, '1');
    I.waitForElement(this.locators.loginButton, 5)
    I.click(this.locators.loginButton)
  }
}