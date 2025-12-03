// Datatypes

// Primitives -> string , number , boolean , null, undefined, bigInt, Symbol

let str = "hello ";
let number = 635;
let number2 = 765.999;
let isLoggedIn = true;

// null-> when we doesn't want to assign value to the variable

let pointingObject = null;

// undefined -> When we doesn't initialize a variable that time interpreter or compiler gives a default value that is undefined . In case of cpp it is garbage value

let age;

// bigInt

//  Number.MAX_SAFE_INTEGER;

let bigNumber = 9007199254740991n;

bigNumber += 3n; // if add 3n in the bigInt it will give precise value neither if we do this operation on number this will result an error

console.log(bigNumber);

const u1 = Symbol("uid");

const user = {
  name: "Subhajit",
  age: 21,
  uid: "12", // If there is a uid and somehow property changes and its result an error thats why we use Symbol for an unique immutable value
};

user[u1] = "001";

console.log(user);

// Non-Primitives

// Array

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Object

const student = {
  name: "Dipannita Bag",
  age: 20,
  address: "Burdwan",
};

console.log(student);

// Function

function greet() {
  console.log("Hello jiii");
}
greet(); // Function call
