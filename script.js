let title="project name"
let screens="Простые, Сложные, Интерактивные"
let screenPrice=50000
let rollback=24
let fullPrice=100000
let adaptive=true
console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log("screen length is ",screens.length)
console.log("Стомость вёрстки экранов ",screenPrice, " $")
console.log("Стомость разработки сайта ",fullPrice, " $")
console.log(screens.toLowerCase().split(""))

console.log("Процент отката ",(fullPrice * (rollback/100)) )


