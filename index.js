// "use strict";

// // var x = 10;
// // var x = 20;
// // console.log(x);

// // let y = 30;
// // let y = 40;

// // console.log(y);

// // const z = 50;
// // const z = 60;
// // console.log(z);

// // console.log(c);
// // const c = 10;

// // greet();

// // var greet = function () {
// //   console.log("hello");
// // };

// // greet();

// // var greet = () => {
// //   console.log("hello");
// // };

// // console.log(5 === "5");

// // console.log(null === undefined);
// // console.log([1, 2] == 1, 2);

// // console.log(false, 2);

// // if (NaN) {
// //   console.log("This will not run");
// // } else {
// //   console.log("NaN is falsy");
// // }

// // console.log("abc" / 2);

// // console.log(NaN !== NaN);

// // let x;
// // console.log(x);

// // function greet(name) {
// //   console.log(name);
// // }
// // greet();

// // const obj = {};
// // console.log(obj.key);

// // console.log(typeof 4);

// // console.log(typeof null);
// // console.log(typeof undefined);

// // let x = null;
// // console.log(x == null);

// // let numbers = [1, 2, 3];
// // console.log(Array.isArray(numbers));

// // console.log(Array.isArray(123));
// // console.log(Array.isArray("Hello"));
// // console.log(Array.isArray({ a: 1 }));

// // let fruits = ["Apple", "Banana", "Cherry"];
// // console.log(fruits);

// // const years = new Array(1991, 1992, 1993);
// // console.log(years);

// // const arr = [1, 2, 3, 4];
// // arr.push(5, 8);

// // console.log(arr);

// // const arr = [5, 1, 2, 3, 4];
// // arr.shift();

// // console.log(arr);

// // let arr = [1, 2, 3, 4, 5];
// // let removed = arr.splice(1, 3, 22, 33, 44);
// // console.log(arr);
// // console.log(removed);

// // let arrayOne = [1, 2, 3, 4];
// // let arrayTwo = ["a", "b", "c"];

// // let newArray = arrayOne.concat(arrayTwo);
// // console.log(newArray);

// // let numbers = [1, 2, 3, 4];
// // numbers.forEach(function (number, index, array1) {
// //   console.log(number, index, array1);
// // });

// // const movements = [200, 450, -400, 3000];

// // movements.forEach(function (movement) {
// //   const result = movement * 2;
// //   console.log(result);
// // });
// // console.log(movements);
// // let numbers = [1, 2, 3, 4, 5];

// // let newNumbers = numbers.map(function (num, index, array) {
// //   return array;
// // });

// // console.log(newNumbers);
// // console.log(numbers);

// // let movements = [10, -3, 5, 2, -6];

// // let positiveNumbers = movements.filter(function (mov) {
// //   return mov > 0;
// // });

// // console.log(positiveNumbers);

// // const numbers = [4, -3, 5, -2, 1];

// // const result = numbers.reduce(function (accumulator, curr, i, arr) {
// //   console.log(accumulator, curr);
// //   return accumulator + curr;
// // }, 0);

// // console.log(result);

// // let movements = [4, -3, 5, -2, 1];

// // let max = movements.reduce((acc, mov) => {
// //   console.log(`This is accumulator value ${acc}. this is mov value ${mov}`);
// //   if (acc > mov) {
// //     return acc;
// //   } else return mov;
// // }, movements[0]);

// // console.log(max);

// // let person = {
// //   name: "Alice",
// //   age: 25,
// //   job: "Engineer",
// // };

// // for (let key in person) {
// //   console.log(key, ":", person[key]);
// // }

// // let person = {
// //   name: "Alice",
// //   age: 25,
// //   job: "Engineer",
// // };

// // Object.keys(person).forEach(function (key) {
// //   console.log(key, ":", person[key]);
// // });

// // let person = {
// //   name: "Alice",
// //   age: 23,
// //   job: "Teacher",
// // };

// // let { me, ae, job } = person;

// // console.log(me);
// // console.log(ae);

// // let original = {
// //   name: "Alice",
// //   age: 25,
// //   address: {
// //     city: "New York",
// //     zip: "10001",
// //   },
// // };

// // let shallowCopy = Object.assign({}, original);

// // // Modify the shallow copy
// // shallowCopy.name = "Bob"; // Changing a top-level property
// // shallowCopy.address.city = "Los Angeles"; // Changing a nested property

// // console.log(original.name); // "Alice" (Top-level properties are independent)
// // console.log(shallowCopy.name);
// // console.log(original.address.city);
// // console.log(shallowCopy.address.city); // "Los Angeles" (Nested object is shared)

// // let person = {
// //   name: "Alice",
// //   age: 25,
// //   job: "Engineer",
// // };

// // let clonedPerson = { ...person };

// // console.log(clonedPerson);

// // let person = {
// //   name: "Alice",
// //   age: 25,
// //   job: "Engineer",
// //   address: { city: "New York", zip: "10001" },
// // };

// // let deepClonedPerson = JSON.parse(JSON.stringify(person));

// // deepClonedPerson.name = "Bob";
// // deepClonedPerson.address.city = "Los Angeles";

// // console.log(person.name);
// // console.log(deepClonedPerson.name);
// // console.log(person.address.city);
// // console.log(deepClonedPerson.address.city);

// // let person = {
// //   name: "Alice",
// //   age: 25,
// //   job: "Engineer",
// //   address: { city: "New York", zip: "10001" },
// // };

// // let deepClonedPerson = structuredClone(person);

// // deepClonedPerson.name = "Bob";
// // deepClonedPerson.address.city = "Los Angeles";

// // console.log(person.name);
// // console.log(deepClonedPerson.name);
// // console.log(person.address.city);
// // console.log(deepClonedPerson.address.city);

// // greet();

// // const greet = function () {
// //   console.log("Hello, World!");
// // };

// // greet(); // Works! Output: "Hello, World!"

// // let bookings = [];

// // let booking = {
// //   flightNum: 1,
// //   numPassengers: 2,
// //   price: 3,
// // };

// // bookings.push(booking);

// // console.log(bookings);

// // function test1(name, age, job) {
// //   const testObject = {
// //     name,
// //     age,
// //     job,
// //   };
// // }

// // test1("Didula", 29, "SE");
// // console.log(testObject);

// // function testScope() {
// //   if (true) {
// //     var x = "var variable";
// //     let y = "let variable";
// //     const z = "const varaible";
// //   }

// //   console.log(y);
// // }
// // testScope();

// // const bookings = [];

// // const createBooking = function (flightNum, numPassengers = 1, price = 199) {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };

// //   console.log(bookings);
// //   bookings.push(booking);
// // };

// // createBooking("LH123");

// // let name = "Didula";

// // let nameTwo = "Jason";

// // name = nameTwo;

// // console.log(name);
// // console.log(nameTwo);

// // function greet(greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // }

// // const greeter = greet("Hey");
// // greeter("Jonas");

// // const greet = (greeting) => {
// //   return (name) => {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greeter = greet("Hey");
// // greeter("Schedtmann");

// // const jonas = {
// //   name: "Jonas",
// //   year: 1989,
// //   calcAge: function () {
// //     return 2037 - this.year;
// //   },
// // };

// // const result = jonas.calcAge();
// // console.log(result);

// // function greet() {
// //   return this;
// // }

// // const result = greet();
// // console.log(result);

// // const greetMain = () => {
// //   const greet = () => {
// //     return 21;
// //   };
// //   return this;
// // };

// // const result = greetMain()();
// // console.log(result);

// // const obj = {
// //   name: "Alice",
// //   greet: () => {
// //     console.log(this.name);
// //   },
// // };

// // obj.greet();

// // console.log(this);

// // const jonas = {
// //   year: 1991,
// //   calcAge: 1991,
// //   calcAge: function () {
// //     console.log(this);
// //     console.log(2037 - this.year);
// //   },
// // };

// // jonas.calcAge();

// // const matilda = {
// //   year: 2017,
// // };

// // matilda.calcAge = jonas.calcAge;
// // matilda.calcAge();

// // const lufthansa = {
// //   airline: "Lufthansa",
// //   iataCode: "LH",
// //   bookings: [],
// //   book(flightNum, name) {
// //     console.log(
// //       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// //     );

// //     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
// //   },
// // };

// // lufthansa.book(239, "Jonas Schmedtmann");
// // // lufthansa.book(635, "John Smith");
// // // console.log(lufthansa);

// // const euroWings = {
// //   airline: "Eurowings",
// //   iataCode: "EW",
// //   bookings: [],
// // };

// // const book = lufthansa.book;

// // console.log("----------------------------");

// // book.call(euroWings, 23, "Sarah Williams");

// // console.log(euroWings);

// // const flightArray = [20, "Geroge Baily"];
// // book.apply(euroWings, flightArray);

// // const bookEW = book.bind(euroWings);
// // bookEW(23, "Steven Williams");

// // lufthansa.planes = 300;
// // lufthansa.buyPlane = function () {
// //   console.log(this);

// //   this.planes++;
// //   console.log(this.planes);
// // };

// // lufthansa.buyPlane();
// // console.log(lufthansa);

// const person = {
//   name: "Daniru",
//   age: 22,
//   job: "SE",
//   book: function details() {
//     // console.log(`${this.name}`);
//     console.log(this);
//   },
// };

// person.book();
// console.log(person.book);

// const person2 = {
//   name: "Didula",
//   age: 29,
//   job: "FEd",
//   book: function details() {
//     // console.log(`${this.name}`);
//     console.log(this);
//   },
// };

// person2.book();
// // console.log(10);

// function person(name, age) {
//   console.log(`my name is ${name} and I'm ${age} years old.`);
//   console.log(this);
// }

// const result = person("Didula", 29);

// const person2 = (nameTwo, ageTwo) => {
//   console.log(`my name is ${nameTwo} and I'm ${ageTwo} years old.`);
//   console.log(this);
// };

// const person3 = function (sdsad, dad) {
//   dasd;
// };

// console.log(namew);
// var namew = "Daniru Din";

// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const { login } = useAuth();

//   const handleLogin = (role) => {
//     login({ username: "JohnDoe", role });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <button onClick={() => handleLogin("user")}>Login as User</button>
//       <button onClick={() => handleLogin("admin")}>Login as Admin</button>
//     </div>
//   );
// };

// export default Login;

// function Header() {
//   const { onClearPosts } = useContext(PostContext);
//   return <button onClick={onClearPosts}>Clear Posts</button>;
// }

// function calcAge(birthYear) {
//   const now = 2037;
//   var age = now - birthYear;
//   return age;
// }

// console.log(age);

// var name = "Alice";

// function printName() {
//   console.log(name);
//   var name = "Bob";
//   console.log(name);
// }

// printName();
// var color = "red";

// function changeColor() {
//   console.log(color);
//   var color = "blue";
//   console.log(color);
// }

// console.log(color);
// changeColor();

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

// person("Didula");

// function person(firstName) {
//   const result = `My first name is ${firstName}`;
//   console.log(result);
// }

// person("didula");

// var person = function (firstName) {
//   const result = `My first name is ${firstName}`;
//   console.log(result);
// };

// const myArray = "Hello";

// const result = myArray.split("");
// const result2 = result.reverse();
// console.log(result2);

// function reverseString(str) {
//   const result = str.split("").reverse().join();
//   console.log(result);
// }

// reverseString("Hello how are you?");

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(3, 7));

// function convertToSeconds(minutes) {
//   return minutes * 60;
// }

// console.log(convertToSeconds(5));

// const nextNumber = function (currentNumber) {
//   return currentNumber + 1;
// };

// console.log(nextNumber(99));

// const rectangleArea = (width, height) => {
//   return width * height;
// };

// console.log(rectangleArea(5, 10));
// const isEven = (number) => {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// result = isEven(7);
// console.log(result);

// const maxNumber = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else if (num2 > num1) {
//     return num2;
//   } else {
//     return "numbers are equal";
//   }
// };

// console.log(maxNumber(2, 5));
// console.log(maxNumber(6, 3));
// console.log(maxNumber(3, 3));

// const reverseString = (str) => {
//   reversedOutput = str.split("").reverse().join("");
//   return reversedOutput;
// };

// console.log(reverseString("Hello"));
// console.log(reverseString("Javascript"));

// const countVowels = (str) => {
//   result = str.toLowerCase().split("");
//   return result;
// };

// const output = countVowels("Hello");
// console.log(output);

// const output2 = output.filter(function (char) {
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     const count = 0;
//     return count++;
//   }
// });

// console.log(output2);

// const inputYear = "1991";
// result = inputYear + 18;
// console.log(result);
// console.log(typeof result);

// const fs = require("fs");
// console.log(fs);

// const day = "tuesday1";

// switch (day) {
//   case "monday":
//     console.log("Today is monday");
//     break;

//   case "tuesday":
//     console.log("today is tuesday");
//     break;

//   default:
//     console.log("today is not monday or tuesday");
// }

// const age = 12;

// const result = age > 18 ? "you can drink wine" : "please drink water";

// console.log(result);

// const person = {
//   name: "John Doe",
//   age: 25,
//   job: "software Engineer",
//   country: "Germany",
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.country);

// const { name, country } = person;

// console.log(name);

// console.log(country);

// const numArray = [1, 2, 3, 4, 5];
// console.log(numArray[2]);

//destructure the array
// const [firstElement, thirdElement, fourthElement, fifthElement] = numArray;

// console.log(firstElement);

// console.log(thirdElement);
// console.log(fourthElement);
// console.log(fifthElement);

// const studentNames = ["Shane", "Matilda", "John", "Sarah"];

// const [firstName, secondName, ...otherNames] = studentNames;

// console.log(firstName);
// console.log(secondName);
// console.log(otherNames);

// const updatedNames = [...studentNames, "Ricky"];
// console.log(updatedNames);

// const fruits = {
//   orange: "orange color",
//   strawberry: "red",
//   mango: "green",
//   banana: "yellow",
// };

// const fruits2 = {
//   apple: "red and green",
// };

// const { orange, mango, ...otherFruits } = fruits;
// console.log(orange);
// console.log(mango);
// console.log(otherFruits);

// const name = "di";

// const obj = {
//   name: "Alice",
//   greet: () => {
//     console.log(this);
//   },
// };
// obj.greet();

// function show() {
//   const myName = "Didula";
//   console.log(this);
//   console.log(this.myName);
// }
// show(); // In browsers: window, in strict mode: undefined

document.querySelector("button").addEventListener("click", function () {
  console.log(this); // Refers to the button element
});
