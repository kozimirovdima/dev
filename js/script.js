"use strict";
/*! УРОК 9 */

// задание 1
// Получаем элемент h1 по тегу
var titleElement = document.getElementsByTagName("h1")[0];
// Выводим текст заголовка в консоль для проверки
console.log(titleElement.innerText);

// задание 2
// Получаем коллекцию элементов с классом "handler_btn"
let buttons = document.getElementsByClassName("handler_btn");
// Преобразуем коллекцию в массив для удобства работы
let buttonsArray = Array.from(buttons);
// Проходимся по массиву кнопок и выводим текст каждой кнопки
buttonsArray.forEach(function (button) {
  console.log(button.innerText);
});

// задание 3
// Получаем кнопку "+"
let addButton = document.querySelector(".screen-btn");
// Выводим текст кнопки в консоль для проверки
console.log(addButton.innerText);

// задание 4
// Получаем элементы с классом "other-items" и "percent"
let itemsWithPercent = document.querySelectorAll(".other-items.percent");
// Получаем элементы с классом "other-items" и "number"
let itemsWithNumber = document.querySelectorAll(".other-items.number");
// Выводим элементы в консоль для проверки
console.log("Элементы с классом 'percent':");
itemsWithPercent.forEach(function (item) {
  console.log(item.textContent);
});
console.log("Элементы с классом 'number':");
itemsWithNumber.forEach(function (item) {
  console.log(item.textContent);
});

// задание 5
// Получаем input типа range через его родителя с классом "rollback"
let rangeInput = document.querySelector(".rollback input[type='range']");
// Выводим полученный input в консоль для проверки
console.log(rangeInput);

// Задание 6
// Получаем <span> с классом "range-value" через его родителя с классом "rollback"
let rangeValueSpan = document.querySelector(".rollback .range-value");
// Выводим полученный <span> в консоль для проверки
console.log(rangeValueSpan);

// Задание 7
// Получаем коллекцию элементов с классом "total-input"
let inputsCollection = document.getElementsByClassName("total-input");
// Создаем пустой массив для хранения элементов
let inputsArray = [];
// Преобразуем коллекцию в массив
for (let i = 0; i < inputsCollection.length; i++) {
  inputsArray.push(inputsCollection[i]);
}
// Выводим массив элементов в консоль для проверки
console.log(inputsArray);

// задание 8
// Изменяемая переменная, в которой будут храниться блоки с классом "screen"
let screenBlocks = document.querySelectorAll(".screen");
// Выводим полученные блоки в консоль для проверки
console.log(screenBlocks);

// Конец 9 урока
