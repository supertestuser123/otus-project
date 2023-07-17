const { config }  = inject();
const { I } = inject();

module.exports = {

  locators:{
    searchField: '//input[@ng-model="searchCustomer"]',
    deleteCustomerButton: '//button[@ng-click="deleteCust(cust)"]',
    customerRow: '//tr[@class="ng-scope"]'
},

search(customerName){
    I.waitForElement(this.locators.searchField,)
    I.fillField(this.locators.searchField, customerName)
},
delete(){
    I.click(this.locators.deleteCustomerButton)
    I.dontSee(this.locators.customerRow)
}





}
  
