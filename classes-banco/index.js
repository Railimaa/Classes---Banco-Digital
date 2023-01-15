const App = require("./App")

App.createUser("amanda@gmail.com", "Amanda Nascimento")
App.createUser("jose@gmail.com", "José Armando")
App.createUser("messi@gmail.com", "Lionel Messi")

App.deposit("amanda@gmail.com", 100)

App.transfer("amanda@gmail.com", "jose@gmail.com", 20)

App.changeLoanTaxa(10)
App.takeLoan("messi@gmail.com", 2000, 24)

console.log(App.findUser("amanda@gmail.com"))
console.log(App.findUser("amanda@gmail.com").account)
console.log(App.findUser("jose@gmail.com"))
console.log(App.findUser("jose@gmail.com").account)
console.log(App.findUser("messi@gmail.com"))
console.log(App.findUser("messi@gmail.com").account)
console.log(App.findUser("messi@gmail.com").account.loans[0].installments)
