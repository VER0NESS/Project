"use strict"

const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    service1: "",
    service2: "",
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    asking: function() {
        this.title = prompt("Как называется ваш проект?")
        this.screens = prompt("Какие типы экранов разработать?")
        this.screenPrice = this.getNumber("Сколько будет стоить данная работа?")
        this.adaptive = confirm("Нужен ли адаптив на сайте?")
    },

    getAllServicePrices: function() {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                this.service1 = prompt("Какой дополнительный тип услуги нужен?")
            } else if (i === 1) {
                this.service2 = prompt("Какой дополнительный тип услуги нужен?")
            }
            sum += this.getNumber("Сколько это будет стоить?")
        }
        return sum
    },

    start: function() {
        this.asking()
        this.allServicePrices = this.getAllServicePrices()
        this.fullPrice = this.getFullPrice()
        this.servicePercentPrice = this.getServicePercentPrices()
        this.title = this.getTitle()
        this.logger()
    },

    logger: function() {
        for (let x in this) {
            console.log(x)
        }
    },

    isNum: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    getNumber: function(question) {
        let input = prompt(question)
        while (input === null || input.trim() === "" || !this.isNum(input)) {
            input = prompt(question)
        }
        return Number(input.trim())
    },

    getFullPrice: function() {
        return this.screenPrice + this.allServicePrices
    },

    getServicePercentPrices: function() {
        return this.fullPrice - (this.fullPrice * (this.rollback / 100))
    },

    getTitle: function() {
        return this.title.trim().toLocaleUpperCase() + this.title.trim().slice(1).toLowerCase()
    },

    getRollbackMessage: function(x) {
        if (x >= 30000) {
            return "Даем скидку в 10%"
        } else if (x >= 15000 && x < 30000) {
            return "Даем скидку в 5%"
        } else if (x >= 0 && x < 15000) {
            return "Скидка не предусмотрена"
        } else {
            return "Что то пошло не так"
        }
    }
}
appData.start()