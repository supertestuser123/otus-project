const { config }  = inject();
const { I } = inject();

module.exports = {

  locators:{
    firstNameField: '//input[@ng-model="fName"]',
    lastNameField: '//input[@ng-model="lName"]',
    postCodeField: '//input[@ng-model="postCd"]',
    addButton: '//button[text()="Add Customer"]',
},

addCustomer(){
    I.waitForElement(this.locators.firstNameField)
    I.fillField(this.locators.firstNameField, config.customer.firstName)
    I.fillField(this.locators.lastNameField, config.customer.lastName)
    I.fillField(this.locators.postCodeField, config.customer.postcode)
    I.click(this.locators.addButton)
    I.acceptPopup()
}

}

  
