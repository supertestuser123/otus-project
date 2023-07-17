const OpenAccountPage = require("../framework/pages/OpenAccountPage")
Feature('Открытие счета')

Before(({ MainPage, ManagerPage }) => { 
    MainPage.visit()
    MainPage.goToManager()
    ManagerPage.goToOpenAccount()
 })

Scenario('ОТкрытие нового счета клиенту', ({ OpenAccountPage })=>{
    OpenAccountPage.openDollarAccount()
 })