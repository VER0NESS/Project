"use strict"
const appData={
    title: "",
    screens:[],
    screenPrice:0,
    adaptive:true,
    services:[],
    rollback:10,
    allServicePrices:0,
    fullPrice:0,
    servicePercentPrice:0,
    asking:function(){
        this.title=this.getText("Как называется ваш проект?")
        for (let i=0; i < 2; i++){
            const name=this.getText("Какие типы экранов нужно разработать?")
            const price=this.getNumber("Сколько будет стоить данная работа?")
            this.screens.push({
                name:name,
                price:price
            })
        }
        this.adaptive=confirm("Нужен ли адаптив на сайте?")
        for (let i=0;i<2;i++){
            const name =this.getText("Какой дополнительный тип услуги нужен?")
            const price=this.getNumber("Сколько это будет стоить?")
            this.services.push({
                name:name,
                price:price
            })
        }
    },
    getScreenPrice:function(){
        return this.screens.reduce(function(sum,x){
            return sum+x.price
        }, 0)
    },
    getAllServicePrices:function(){
        return this.services.reduce(function(sum,x){
            return sum+x.price
        }, 0)
    },
    start: function(){
        this.asking()
        this.screenPrice=this.getScreenPrice()
        this.allServicePrices=this.getAllServicePrices()
        this.fullPrice=this.getFullPrice()
        this.servicePercentPrice=this.getServicePercentPrices()
        this.title=this.getTitle()
        this.logger()
    },
    logger: function(){
        for (let key in this){
            if (typeof this[key]!=="function") {
                console.log(key+":", this[key])
            }
        }
        console.log(this.getRollbackMessage(this.fullPrice))
    },
    isNum:function(num){
        return !isNaN(parseFloat(num))&&isFinite(num)
    },
    getNumber:function(question){
        let input
        do{
            input = prompt(question)
        }while (input === null || input.trim() === "" || !this.isNum(input))
        return Number(input.trim())
    },
    getText:function(question) {
        let input
        do{
            input=prompt(question)
        }while(input===null||input.trim()===""||this.isNum(input))
        return input.trim()
    },
    getFullPrice:function(){
        return this.screenPrice + this.allServicePrices
    },
    getServicePercentPrices:function(){
        return this.fullPrice-(this.fullPrice*(this.rollback / 100))
    },
    getTitle:function(){
        return this.title.trim().toLocaleUpperCase() + this.title.trim().slice(1).toLowerCase()
    },
    getRollbackMessage:function(x){
        if (x >= 30000){
            return "Даем скидку в 10%"
        } else if(x >= 15000 && x < 30000){
            return "Даем скидку в 5%"
        } else if(x >= 0 && x < 15000){
            return "Скидка не предусмотрена"
        } else{
            return "Что то пошло не так"
        }
    }
}
appData.start()