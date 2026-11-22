let title
let screens
let screenPrice
let adaptive
let service1
let service2
let rollback=10
let allServicePrices
let fullPrice
let servicePercentPrice
const isNum=function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
}
const getNumber = function(question) {
    let input = prompt(question)
    while (input === null || input.trim() === "" || !isNum(input)) {
        input = prompt(question)
    }
    return Number(input.trim())
}
const asking = function() {
    title = prompt("Как называется ваш проект?")
    screens = prompt("какие типы экранов разработать?")
    screenPrice = getNumber("Сколько будет стоить данная работа?")
    adaptive = confirm("Нужен ли адаптив на сайте?")
}
asking()
const getAllServicePrices=function(){
    let sum=0
    for(let i=0;i<2;i++){
        if(i===0){
            service1=prompt("какой дополнительный тип услуги нужен?")
        }else if(i===1){
            service2=prompt("какой дополнительный тип услуги нужен?")
        }
        sum+= getNumber("Сколько это будет стоить?")
    }
    return sum
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
    return("Даем скидку в 10%");
} else if (x >= 15000 && x < 30000) {
    return("Даем скидку в 5%");
} else if (x >= 0 && x < 15000) {
    return("Скидка не предусмотрена");
} else {
    return("Что то пошло не так");
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
console.log("allServicePrices",allServicePrices)