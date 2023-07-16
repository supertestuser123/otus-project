const CustomerAccountPage = require("../framework/pages/CustomerAccountPage")
const CustomerLoginPage = require("../framework/pages/CustomerLoginPage")
Feature('Аккаунт пользователя')

Before(({ MainPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
    CustomerLoginPage.selectFirstUser()
 })

Scenario.skip('Выход из аккаунта', ({ CustomerAccountPage })=>{
    CustomerAccountPage.logout()
 })

Scenario('Возврат на страницу логина', ({ CustomerAccountPage })=>{
    CustomerAccountPage.goToLoginPage()
 })