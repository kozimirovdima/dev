"use strict";

// Объявление переменных

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  num: 0,
  sum: 0,
  n: 0,
  price: 0,
  rollbackMessage: 0,

  // Перенос функций в объекты
  asking: function () {
    appData.title = prompt("Как назывется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать? (через запятую, пожалуйста)",
      "Простые, сложные"
    );

    do {
      appData.screenPrice = +prompt(
        "Сколько будет стоить данная работа (в руб.)?",
        25000
      ).trim();
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm(
      "Нужен ли адаптив на сайте? (выберите нужную кнопку)"
    );
  },

  // Преобразование текста
  getTitle: function () {
    return (
      appData.title.trimStart().toLocaleUpperCase().slice(0, 1) +
      appData.title.trimStart().toLocaleLowerCase().substring(1)
    );
  },

  // Проверка на число
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },

  // метод дополнительных услуг
  getAllservicePrices: function () {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "услуга1"
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой ещё дополнительный тип услуги нужен?",
          "услуга2"
        );
      }
      do {
        appData.n = prompt("Сколько это будет стоить (руб.)?", 4300);
      } while (!appData.isNumber(appData.n));
      {
        appData.sum += +appData.n;
      }
    }
    return appData.sum;
  },
  // Метод сложения итог.стоимость без отката
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },

  // Метод стоимости с вычетом отката
  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  // Метод скидки
  getRollbackMessage: function (price) {
    switch (true) {
      case price > 30000:
        return "Даем скидку 10%";
        break;
      case 15000 < price && price <= 30000:
        return "Даем скидку 5%";
        break;
      case 0 < price && price <= 15000:
        return "Скидка не предусмотрена";
        break;
      case price <= 0:
        return "Что-то пошло не так";
        break;
    }
  },

  // Метод LOGGER
  logger: function () {
    for (const key in appData) {
      console.log("Ключ: " + key + " значение: " + appData[key]);
    }
  },
  // Метод -Блока функционала
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllservicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.rollbackMessage = appData.getRollbackMessage(appData.fullPrice);
    appData.logger();
  },
};

// Конец appdata Объекта

// Запуск
appData.start();
