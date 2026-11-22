let title=prompt("Как называется ваш проект?","Проект1")
let screens=prompt("какие типы экранов разработать?","простые")
let screenPrice=+prompt("Сколько будет стоить данная работа?",10000)
let adaptive=confirm("Нужен ли адаптив на сайте?",false)
let service1 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice2 = +prompt("Сколько это будет стоить?")
let rollback=10
let allServicePrices
let fullPrice
let servicePercentPrice
const getAllServicePrices=function(){
    return servicePrice1+servicePrice2
}
const showTypeOf=function(x){
    console.log(x,typeof x)
}
const getFullPrice=function(){
    return screenPrice+allServicePrices
}
const getServicePercentPrices=function(){
    return fullPrice-(fullPrice*(rollback/100))
}
const getTitle=function(){
    return title.trim()[0].toLocaleUpperCase()+title.trim().substr(1).toLowerCase();
}
const getRollbackMessage=function(x){
    if (x >= 30000) {
    console.log("Даем скидку в 10%");
} else if (x >= 15000 && x < 30000) {
    console.log("Даем скидку в 5%");
} else if (x >= 0 && x < 15000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}
}
allServicePrices=getAllServicePrices()
fullPrice=getFullPrice()
servicePercentPrice=getServicePercentPrices()
title=getTitle()
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
console.log(getRollbackMessage(fullPrice))
console.log(typeof title)
console.log(typeof screenPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log(servicePercentPrice)
console.log("стоимость вёрстки экранов "+screenPrice+" юани\n"+"стоимость вёрстки сайта "+fullPrice+" юани")
