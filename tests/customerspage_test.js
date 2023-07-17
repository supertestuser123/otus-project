Feature('База клиентов')

Before(({ MainPage, ManagerPage }) => { 
    MainPage.visit()
    MainPage.goToManager()
    ManagerPage.goToCustomers()
 })

Scenario('Удаление клиента из базы', ({ CustomersPage })=>{
    //небольшое пояснение: при выполнении теста клиент не совсем удаляется, тут нет БД
    //список клиентов фиксирован к сессии, и при каждом новом запуске всегда отображаются тем же составом
    CustomersPage.search('Albus')
    CustomersPage.delete()
 })