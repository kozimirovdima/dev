"use strict";
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько будет стоить " + service1 + "?");
let service2 = prompt("Может быть еще какая-то услуга нужна будет?");
let servicePrice2 = +prompt("Сколько будет стоить " + service2 + "?");
let rollBack = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;

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
  return servicePrice1 + servicePrice2;
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

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

console.log(servicePercentPrice);
console.log(getTitle());
console.log(getRollBackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens);
console.log(servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
