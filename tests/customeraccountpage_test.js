const CustomerAccountPage = require("../framework/pages/CustomerAccountPage")
Feature('Аккаунт пользователя')

Before(({ MainPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
    
 })

Scenario('Выход из аккаунта', ({ CustomerLoginPage, CustomerAccountPage })=>{
    CustomerLoginPage.selectFirstUser()
    CustomerAccountPage.logout()
 })