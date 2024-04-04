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
console.log(addButton);

// задание 4
// Получаем элементы с классом "other-items" и "percent"
let itemsWithPercent = document.querySelectorAll(".other-items.percent");
// Получаем элементы с классом "other-items" и "number"
let itemsWithNumber = document.querySelectorAll(".other-items.number");

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
console.dir(inputsCollection);
console.log(inputsCollection[0]);
console.log(inputsCollection[1]);
console.log(inputsCollection[2]);
console.log(inputsCollection[3]);
console.log(inputsCollection[4]);
// задание 8
// Изменяемая переменная, в которой будут храниться блоки с классом "screen"
let screenBlocks = document.querySelectorAll(".screen");
// Выводим полученные блоки в консоль для проверки
console.dir(screenBlocks);
console.log(screenBlocks[0]);
// Конец 9 урока
