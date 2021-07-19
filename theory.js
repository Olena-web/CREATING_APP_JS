"use strict";
//while
// let i = 0;
// while (i < 2) {
//   i++;
//   const a = prompt("Один из последних просмотренных фильмов?", "");
//   const b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

//do
//let i = 0;
// do {
//   i++;
//   const a = prompt("Один из последних просмотренных фильмов?", "");
//   const b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// } while (i < 2);

// function showFirstMessage(text) {
//     console.log(text);
//   }
//   showFirstMessage("Hello, World!");
//   const logger = function () {
//     console.log("hello");
//   };
//   logger();

//   const calc = (a, b) => a + b;

//   //methods for strings
//   //изменение регистра строки
//   const str = "test";
//   console.log(str.toUpperCase());

//   let fruit = "Some fruit";
//   console.log(fruit.indexOf("fruit"));
//   console.log(fruit.indexOf("q"));
//   const logg = "hello, world";
//   console.log(logg.slice(-5));

//   const num = 12.2;
//   console.log(Math.round(num));

//   const test = "12.2px";
//   console.log(parseInt(test));
//   console.log(parseFloat(test));

//callback function
// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }
// first();
// second();
// function learnJS(lang, callback) {
//   console.log(`я учу : ${lang}`);
//   callback();
// }

// function done() {
//   console.log("я прошел этот урок");
// }

// learnJS("JavaScript", done);

//objects
// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("test");
//   },
// };
// options.makeTest();
// const { border, bg } = options.colors;
// console.log(border);
// console.log(options.name);
// delete options.name;
// console.log(options.name);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
//       //counter++;
//     }
//   } else console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   counter++;
// }
// console.log(counter);
// console.log(Object.keys(options).length);

//array

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);

// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let value of arr) {
//   console.log(value);
// }
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// const obj = {
//   a: 5,
//   b: 1,
// };
// const copy = obj; //копирует ссылка, а не создает копию объекта
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   i: 20,
// };
// console.log(Object.assign(numbers, add));
// console.log(Object.assign({}, add));

// const clone = Object.assign({}, add);
// clone.d = 25;
// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();
// newArray[1] = "zevtryi";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "vk", "facebook"];
// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ["a", "b"];
// const newArray = [...array];
// const q = {
//   one: 1,
//   two: 2,
// };
// const newObj = { ...q };
// console.log(Object.setPrototypeOf(array, newArray));
