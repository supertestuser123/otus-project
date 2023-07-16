const { I } = inject();

module.exports = {
    
    locators:{
        customerLoginButton: '//button[text()="Customer Login"]',
        managerLoginButton: '//button[text()="Bank Manager Login"]',
      },

visit(){
    I.amOnPage('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
},

goToCustomer(){
    I.waitForElement(this.locators.customerLoginButton, 5)
    I.click(this.locators.customerLoginButton)
},

goToManager(){
    I.waitForElement(this.locators.managerLoginButton, 5)
    I.click(this.locators.managerLoginButton)
}

}