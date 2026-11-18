let title=prompt("Как называется ваш проект?")
let screenPrice=+prompt("Сколько будет стоить данная работа?")
let rollback=24
let adaptive=confirm("Нужен ли адаптив на сайте?")
let ourScreens="Простые, Сложные, Интерактивные"
let service1 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice2 = +prompt("Сколько это будет стоить?")

let fullPrice = screenPrice + servicePrice1 + servicePrice2
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
// console.log(servicePercentPrice)


// console.log(typeof title)
// console.log(typeof fullPrice)
// console.log(typeof adaptive)
// console.log("screen length is ",screens.length)
// console.log("Стоимость вёрстки экранов ",screenPrice, " $")
// console.log("Стоимость разработки сайта ",fullPrice, " $")
// console.log(screens.toLowerCase().split(", "))
// console.log("Процент отката ",(fullPrice * (rollback/100)) )


// function expression
const getAllServicePrices = function(){
    const allServicePrices = servicePrice1+servicePrice2
    console.log("Общая стоимость проекта ",allServicePrices)
}

// function declaration
function getFullPrice(screenPrice, allServicePrices){
    const fullPrice = (screenPrice + allServicePrices)
    console.log(fullPrice)
}

function getTitle(){
    title = title.trim().toLowerCase()
    title = title.charAt(0).toUpperCase() + title.slice(1)
    return(title)
}

function getServicePercentPrices(){
    const servicePercentPrice = Math.ceil(screenPrice + servicePrice1 + servicePrice2 - (fullPrice * (rollback / 100)))
    console.log(servicePercentPrice)
}
// типы экранов че то я пропустил где эт
function showTypeOf(){
    let screens=prompt("Какие типы экранов нужно разработать?")
    console.log("Экран для разработки ",String(screens.split(', ')))
}
function getRollbackMessage(){
    if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}

}

showTypeOf()
console.log("Доступные типы экранов:", ourScreens)
getRollbackMessage()
getAllServicePrices()

// крч смотрим урок я хз что такое showTypeOf