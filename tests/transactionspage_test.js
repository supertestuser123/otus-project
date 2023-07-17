const TransactionsPage = require("../framework/pages/TransactionsPage")
Feature('Транзакции пользователя')

Before(({ MainPage, CustomerLoginPage, CustomerAccountPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
    CustomerLoginPage.selectFirstUser()
    CustomerAccountPage.goToTransactions()
 })

Scenario('Переход на страницу транзакций', ({ TransactionsPage })=>{
    TransactionsPage.isOnPage()
})

Scenario('Переход на страницу аккаунта', ({ TransactionsPage })=>{
    TransactionsPage.goToAccountPage()
})