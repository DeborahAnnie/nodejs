// app/index.js
const calc = require ('./calculator');
const numbersToAdd = [7, 5, 11, 8, 15];
const result = calc.sum(numbersToAdd);
console.log(result);