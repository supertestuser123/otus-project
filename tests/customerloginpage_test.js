const MainPage = require("../framework/pages/MainPage")
const CustomerLoginPage = require("../framework/pages/CustomerLoginPage")
const CustomerAccountPage = require("../framework/pages/CustomerAccountPage")

Feature('Переход в аккаунт клиента')

Before(({ MainPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
 })

Scenario('Логин первого клиента', ({ CustomerLoginPage, CustomerAccountPage })=>{
   CustomerLoginPage.selectFirstUser()
   CustomerAccountPage.isLogged()
})