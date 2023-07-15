const { I } = inject();

module.exports = {

  locators:{
    customerSelect: '//select[@name="userSelect"]',
    loginButton: '//button[text()="Login"]',
  },

  selectFirstUser(){
    I.waitForElement(this.locators.customerSelect)
    I.selectOption(this.locators.customerSelect, 'Hermoine Granger');
    I.waitForElement(this.locators.loginButton)
    I.click(this.locators.loginButton)
  }
}