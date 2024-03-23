// lesson03

// 3) Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
let title = prompt("Как называется ваш проект?");
console.log(title);

// 4) Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  'пример: "Простые, Сложные, Интерактивные"'
);
console.log(screens);

// 5) Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
let screenPrice = parseInt(
  prompt("Сколько будет стоить данная работа?", "12000")
);
console.log(screenPrice);

let rollBack = Math.floor(Math.random() * 101);
let fullPrice = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
// 6) Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)
let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

// 7) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость
let service1 = prompt("Какая дополнительная услуга нужна?");
let servicePrice1 = +prompt("Цена " + service1 + "?");

let service2 = prompt("Какая еще дополнительная услуга нужна?");
let servicePrice2 = +prompt("Вторая цена " + service2 + "?");

// 8) Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice
fullPrice = screenPrice + servicePrice1 + servicePrice2;

// 9) Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.

let servicePercentPrice = Math.ceil((fullPrice - rollBack) / 1000) * 1000;

console.log("Стоимость за вычетом отката посреднику ", servicePercentPrice);

// 10) Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}
