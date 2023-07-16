const { I } = inject();

module.exports = {

  locators:{
    addCustomerButton: '//button[@ng-click="addCust()"]',
    openAccountButton: '//button[@ng-click="openAccount()"]',
    customersButton: '//button[@ng-click="showCust()"]',
},

goToAddCustomer(){
    I.waitForElement(this.locators.addCustomerButton, 5)
    I.click(this.locators.addCustomerButton)
  },

goToOpenAccount(){
    I.waitForElement(this.locators.openAccountButton, 5)
    I.click(this.locators.openAccountButton)
  },

goToCustomers(){
    I.waitForElement(this.locators.customersButton, 5)
    I.click(this.locators.customersButton)
  },

}

  
