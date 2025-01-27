"use strict";

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

// let original = {
//   name: "Alice",
//   age: 25,
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };

// let shallowCopy = Object.assign({}, original);

// // Modify the shallow copy
// shallowCopy.name = "Bob"; // Changing a top-level property
// shallowCopy.address.city = "Los Angeles"; // Changing a nested property

// console.log(original.name); // "Alice" (Top-level properties are independent)
// console.log(shallowCopy.name);
// console.log(original.address.city);
// console.log(shallowCopy.address.city); // "Los Angeles" (Nested object is shared)

// let person = {
//   name: "Alice",
//   age: 25,
//   job: "Engineer",
// };

// let clonedPerson = { ...person };

// console.log(clonedPerson);

// let person = {
//   name: "Alice",
//   age: 25,
//   job: "Engineer",
//   address: { city: "New York", zip: "10001" },
// };

// let deepClonedPerson = JSON.parse(JSON.stringify(person));

// deepClonedPerson.name = "Bob";
// deepClonedPerson.address.city = "Los Angeles";

// console.log(person.name);
// console.log(deepClonedPerson.name);
// console.log(person.address.city);
// console.log(deepClonedPerson.address.city);

// let person = {
//   name: "Alice",
//   age: 25,
//   job: "Engineer",
//   address: { city: "New York", zip: "10001" },
// };

// let deepClonedPerson = structuredClone(person);

// deepClonedPerson.name = "Bob";
// deepClonedPerson.address.city = "Los Angeles";

// console.log(person.name);
// console.log(deepClonedPerson.name);
// console.log(person.address.city);
// console.log(deepClonedPerson.address.city);

// greet();

// const greet = function () {
//   console.log("Hello, World!");
// };

// greet(); // Works! Output: "Hello, World!"

// let bookings = [];

// let booking = {
//   flightNum: 1,
//   numPassengers: 2,
//   price: 3,
// };

// bookings.push(booking);

// console.log(bookings);

// function test1(name, age, job) {
//   const testObject = {
//     name,
//     age,
//     job,
//   };
// }

// test1("Didula", 29, "SE");
// console.log(testObject);

// function testScope() {
//   if (true) {
//     var x = "var variable";
//     let y = "let variable";
//     const z = "const varaible";
//   }

//   console.log(y);
// }
// testScope();

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(bookings);
//   bookings.push(booking);
// };

// createBooking("LH123");

// let name = "Didula";

// let nameTwo = "Jason";

// name = nameTwo;

// console.log(name);
// console.log(nameTwo);

// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greeter = greet("Hey");
// greeter("Jonas");

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet("Hey");
// greeter("Schedtmann");

// const jonas = {
//   name: "Jonas",
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// const result = jonas.calcAge();
// console.log(result);

// function greet() {
//   return this;
// }

// const result = greet();
// console.log(result);

// const greetMain = () => {
//   const greet = () => {
//     return 21;
//   };
//   return this;
// };

// const result = greetMain()();
// console.log(result);

// const obj = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// obj.greet();

// console.log(this);

// const jonas = {
//   year: 1991,
//   calcAge: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const euroWings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book.call(euroWings, 23, "Sarah Williams");
console.log("----------------------------");
console.log(lufthansa);
console.log(euroWings);
