Feature('База клиентов')

Before(({ MainPage, ManagerPage }) => { 
    MainPage.visit()
    MainPage.goToManager()
    ManagerPage.goToCustomers()
 })

Scenario('Удаление клиента из базы', ({ CustomersPage })=>{
    //небольшое пояснение: тестовые клиенты привязаны к сессии
    CustomersPage.search('Albus')
    CustomersPage.delete()
 })