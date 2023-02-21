"use strict";

console.log("app.js is running");

let fullName = "Lise F. J. Petculescu";
let age = 26;
let city = "Herlev";
let initials = "LIPE";
let lol = "lol";

console.log(fullName, age, city, initials);
console.log(age);
console.log(city);
console.log(initials);
console.log(lol);

age = 43;

console.log(age);

age = 55;

console.log(age);

let message = fullName + " is " + age + " years old ";
console.log(message);

console.log(fullName + " is " + age + " years old");

document.querySelector("#name").textContent = fullName;
document.querySelector("#age").textContent = age;

// backtics
let message2 = `The number is ${age}`;
console.log(message2);
