Feature('Логин в пользователя')

Before(({ MainPage }) => { 
    MainPage.visit()
    MainPage.goToCustomer()
 })

Scenario('Логин первого клиента', ({ CustomerLoginPage, CustomerAccountPage })=>{
   CustomerLoginPage.selectFirstUser()
   CustomerAccountPage.isLogged()
})