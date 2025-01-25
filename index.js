// var x = 10;
// var x = 20;
// console.log(x);

// let y = 30;
// let y = 40;

// console.log(y);

// const z = 50;
// const z = 60;
// console.log(z);

// console.log(c);
// const c = 10;

// greet();

// var greet = function () {
//   console.log("hello");
// };

// greet();

// var greet = () => {
//   console.log("hello");
// };

// console.log(5 === "5");

// console.log(null === undefined);
// console.log([1, 2] == 1, 2);

// console.log(false, 2);

// if (NaN) {
//   console.log("This will not run");
// } else {
//   console.log("NaN is falsy");
// }

// console.log("abc" / 2);

// console.log(NaN !== NaN);

// let x;
// console.log(x);

// function greet(name) {
//   console.log(name);
// }
// greet();

// const obj = {};
// console.log(obj.key);

// console.log(typeof 4);

// console.log(typeof null);
// console.log(typeof undefined);

// let x = null;
// console.log(x == null);

// let numbers = [1, 2, 3];
// console.log(Array.isArray(numbers));

// console.log(Array.isArray(123));
// console.log(Array.isArray("Hello"));
// console.log(Array.isArray({ a: 1 }));

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

// const years = new Array(1991, 1992, 1993);
// console.log(years);

// const arr = [1, 2, 3, 4];
// arr.push(5, 8);

// console.log(arr);

// const arr = [5, 1, 2, 3, 4];
// arr.shift();

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let removed = arr.splice(1, 3, 22, 33, 44);
// console.log(arr);
// console.log(removed);

// let arrayOne = [1, 2, 3, 4];
// let arrayTwo = ["a", "b", "c"];

// let newArray = arrayOne.concat(arrayTwo);
// console.log(newArray);

// let numbers = [1, 2, 3, 4];
// numbers.forEach(function (number, index, array1) {
//   console.log(number, index, array1);
// });

// const movements = [200, 450, -400, 3000];

// movements.forEach(function (movement) {
//   const result = movement * 2;
//   console.log(result);
// });
// console.log(movements);
// let numbers = [1, 2, 3, 4, 5];

// let newNumbers = numbers.map(function (num, index, array) {
//   return array;
// });

// console.log(newNumbers);
// console.log(numbers);

// let movements = [10, -3, 5, 2, -6];

// let positiveNumbers = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(positiveNumbers);

// const numbers = [4, -3, 5, -2, 1];

// const result = numbers.reduce(function (accumulator, curr, i, arr) {
//   console.log(accumulator, curr);
//   return accumulator + curr;
// }, 0);

// console.log(result);

// let movements = [4, -3, 5, -2, 1];

// let max = movements.reduce((acc, mov) => {
//   console.log(`This is accumulator value ${acc}. this is mov value ${mov}`);
//   if (acc > mov) {
//     return acc;
//   } else return mov;
// }, movements[0]);

// console.log(max);

// let person = {
//   name: "Alice",
//   age: 25,
//   job: "Engineer",
// };

// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// let person = {
//   name: "Alice",
//   age: 25,
//   job: "Engineer",
// };

// Object.keys(person).forEach(function (key) {
//   console.log(key, ":", person[key]);
// });

// let person = {
//   name: "Alice",
//   age: 23,
//   job: "Teacher",
// };

// let { me, ae, job } = person;

// console.log(me);
// console.log(ae);

let original = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: "10001",
  },
};

let shallowCopy = Object.assign({}, original);

// Modify the shallow copy
shallowCopy.name = "Bob"; // Changing a top-level property
shallowCopy.address.city = "Los Angeles"; // Changing a nested property

console.log(original.name); // "Alice" (Top-level properties are independent)
console.log(shallowCopy.name);
console.log(original.address.city);
console.log(shallowCopy.address.city); // "Los Angeles" (Nested object is shared)
