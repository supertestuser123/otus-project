const DepositPage = require("../framework/pages/DepositPage")
Feature('Депозит пользователя')

Before(({ MainPage, CustomerLoginPage, CustomerAccountPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
    CustomerLoginPage.selectFirstUser()
    CustomerAccountPage.goToDeposit()
 })

Scenario('Ввести сумму на депозит', ({ DepositPage })=>{
    DepositPage.deposit()
})

