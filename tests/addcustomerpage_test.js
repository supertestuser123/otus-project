const ManagerPage = require("../framework/pages/ManagerPage")
const AddCustomerPage = require("../framework/pages/AddCustomerPage")
Feature('Логин в аккаунт менеджера')

Before(({ MainPage, ManagerPage }) => { 
    MainPage.visit()
    MainPage.goToManager()
    ManagerPage.goToAddCustomer()
 })

Scenario('Добавление клиента', ({ AddCustomerPage })=>{
    AddCustomerPage.addCustomer()
 })