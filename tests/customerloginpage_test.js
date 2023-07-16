Feature('Переход в аккаунт клиента')

Before(({ MainPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
 })

Scenario('Логин первого клиента', ({ CustomerLoginPage, CustomerAccountPage })=>{
   CustomerLoginPage.selectFirstUser()
   CustomerAccountPage.isLogged()
})