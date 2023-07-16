const WithdrawlPage = require("../framework/pages/WithdrawlPage")
Feature('Снятие со счета пользователя')

Before(({ MainPage, CustomerLoginPage, CustomerAccountPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
    CustomerLoginPage.selectFirstUser()
    CustomerAccountPage.goToWithdrawl()
 })

Scenario('Снятие со счета суммы', ({ WithdrawlPage })=>{
    WithdrawlPage.withdrawl()
})

