// lesson02
title = "Название проекта";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 300;
rollback = 5;
fullPrice = 5000;
adaptive = true;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;

console.log("typeof title ", typeof title);
console.log("typeof fullPrice ", typeof fullPrice);
console.log("typeof adaptive ", typeof adaptive);

// Вывести в консоль длину строки из переменной screens

console.log("длина строки переменной screens ", screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”

console.log("Стоимость верстки в рублях", screenPrice);
console.log("“Стоимость разработки сайта в рублях", fullPrice);

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль

console.log(screens.toLocaleLowerCase()); // 1 Привести строку screens к нижнему регистру
console.log(screens.split(", ")); // 2 разбить строку на массив, вывести массив в консоль
// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(
  "Процент отката посреднику за работу",
  fullPrice * (rollback / 100)
);
