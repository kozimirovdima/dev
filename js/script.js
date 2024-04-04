"use strict";
/*! УРОК 9 */

// задание 1
// Получаем элемент h1 по тегу
const titleElement = document.getElementsByTagName("h1")[0];
// Выводим текст заголовка в консоль для проверки
console.log(titleElement.innerText);

// задание 2
// Получаем коллекцию элементов с классом "handler_btn"
const buttons = document.getElementsByClassName("handler_btn");
const buttonStart = document.getElementsByClassName("handler_btn")[0];
const buttonReset = document.getElementsByClassName("handler_btn")[1];
console.log(buttonStart);
console.log(buttonReset);
// задание 3
// Получаем кнопку "+"
const addButton = document.querySelector(".screen-btn");
// Выводим текст кнопки в консоль для проверки
console.log(addButton);

// задание 4
// Получаем элементы с классом "other-items" и "percent"
const itemsWithPercent = document.querySelectorAll(".other-items.percent");
// Получаем элементы с классом "other-items" и "number"
const itemsWithNumber = document.querySelectorAll(".other-items.number");

// задание 5
// Получаем input типа range через его родителя с классом "rollback"
const rangeInput = document.querySelector(".rollback input[type='range']");
// Выводим полученный input в консоль для проверки
console.log(rangeInput);

// Задание 6
// Получаем <span> с классом "range-value" через его родителя с классом "rollback"
const rangeValueSpan = document.querySelector(".rollback .range-value");
// Выводим полученный <span> в консоль для проверки
console.log(rangeValueSpan);

// Задание 7
// Получаем коллекцию элементов с классом "total-input"
const inputsCollection = document.getElementsByClassName("total-input");
console.log(inputsCollection[0]);
console.log(inputsCollection[1]);
console.log(inputsCollection[2]);
console.log(inputsCollection[3]);
console.log(inputsCollection[4]);
// задание 8
// Изменяемая переменная, в которой будут храниться блоки с классом "screen"
const screenBlocks = document.querySelectorAll(".screen");
// Выводим полученные блоки в консоль для проверки
console.log(screenBlocks[0]);
// Конец 9 урока
