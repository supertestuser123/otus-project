const { config }  = inject();
const { I } = inject();

module.exports = {

  locators:{
    customerSelect: '//select[@name="userSelect"]',
    currencySelect: '//select[@name="currency"]',
    processButton: '//button[text()="Process"]',
},

openDollarAccount(){
    I.waitForElement(this.locators.customerSelect, 5)
    I.selectOption(this.locators.customerSelect, '1');
    I.selectOption(this.locators.currencySelect, 'Dollar');
    I.click(this.locators.processButton)
    I.acceptPopup()
}

}

  
