"use strict";
let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let rollBack = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;

// console.log("      ".trim().length); игрался с кодом
// console.log(!isNaN(parseInt("10")) && isFinite("10")); // проверка на число
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num); // проверка на число если не isNan и число с плавающей точкей и не является бесконечностью
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const showTypeOf = function (v) {
  console.log(v, typeof v);
};

const getRollBackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

// 4 урок
const getAllServicePrices = function () {
  // return servicePrice1 + servicePrice2;
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
    } else if (i === 1) {
      service2 = prompt(
        "Может быть еще какая-то услуга нужна будет?",
        "Установка карты"
      );
    }
    sum += +prompt("Сколько это будет стоить?");
  }
  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function () {
  title = title.trim();
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollBack / 100);
};
asking();
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

console.log("allServicePrices", allServicePrices);

console.log(servicePercentPrice);
console.log(getTitle());
console.log(getRollBackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens);
console.log(servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
