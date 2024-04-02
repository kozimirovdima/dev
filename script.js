"use strict";
const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollBack: 10,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  services: {},
  asking: function () {
    this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    while (!this.isString(this.title)) {
      this.title = prompt(
        "Как называется ваш проект? (используйте буквы не используйте цифры)"
      );
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какие типы экранов нужно разработать?");
      let price = 0;
      while (!this.isString(name)) {
        name = prompt(
          "Какие типы экранов нужно разработать? (используйте буквы не используйте цифры)"
        );
      }
      do {
        price = prompt("Сколько будет стоить данная работа?", "20000");
      } while (!this.isNumber(price));

      this.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный вид услуги нужен?");
      let servicePrice;
      while (!this.isString(name)) {
        name = prompt(
          "Какой дополнительный вид услуги нужен? (используйте буквы не используйте цифры)"
        );
      }
      do {
        servicePrice = prompt("Сколько будет стоить данная работа?", "2000");
      } while (!appData.isNumber(servicePrice));

      this.services[name] = +servicePrice;
    }
    // for (let key in appData) {
    //   console.log(key.(0, 2));
    // }
    // игрался с методами для объектов
    this.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.services) {
      this.allServicePrices += this.services[key];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseInt(num)) && isFinite(num);
  },
  isString: function (text) {
    return typeof text === "string" && isNaN(text);
  },
  getAllServicePrices: function () {
    // let sum = 0;
    // this.allServicePrices = sum;
  },
  getFullPrice: function () {
    +this.screenPrice + this.allServicePrices;
  },
  getServicePercentPrices: function () {
    this.fullPrice - this.fullPrice * (this.rollBack / 100);
  },
  getTitle: function () {
    this.title = this.title.trim();
    this.title.charAt(0).toUpperCase() + this.title.slice(1).toLowerCase();
  },
  getRollBackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  logger: function () {
    for (const key in this) {
      console.log(`${key}: ${this[key]}`);
    }
    console.log(this.screens);
  },
  start: function () {
    this.asking();
    this.addPrices();
    this.getFullPrice();
    this.getServicePercentPrices();
    this.getTitle();
    this.logger();
  },
};
appData.start();
