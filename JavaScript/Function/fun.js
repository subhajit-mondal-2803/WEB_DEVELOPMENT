// Function declarartion

function greet() {
  console.log("Hello Jee");
}

// greet();

//Function Expression

const sayHello = function () {
  console.log("Function Expression , Hello");
};

// sayHello();

// Arrow Function

const arrowFn = () => {
  console.log("Hello From Arrow fn");
};

// arrowFn();

// Parameter And arguments

const add = function (num1, num2) {
  // Parameter
  return num1 + num2;
};

// console.log(add(400, 244)); // arguments

// Default Parameter

const multiply = (num1, num2 = 8) => {
  // Default paramter
  return num1 * num2; // return means it will return the value form where the fn is invoked
};

// Error
// const multiply = (num1 = 2, num2) => {  // Default paramter must be the last one or if you make the first one then have to make the others one as well
//   return num1 * num2;
// };

// console.log(multiply(5));

// Rest operator

function printValue(...val) {
  //rest operator : will take variable length arguments and convert it into array
  console.log(val);
}

// printValue(1,4,5,4,3,7,8,4,66,88,24,5);

// Early returns

function grade(marks) {
  if (marks > 90) return "A";
  if (marks > 80) return "B";
  if (marks > 70) return "C";
  if (marks > 60) return "D";
  else return "F";
}

// console.log(grade(80));

// First class function : A function is treated as a value means we can assign fn in a variable and also can pass a fn as agruments in another fn

// Higher Order Fn: A function that can return a fn or can take a fn as parameter

// function abcd(callBack) {
//   callBack();
// }

// abcd(function () {
//   console.log("I am a callback fn");
// });

function abcd() {
  return () => {
    console.log("I am a returned Fn");
  };
}

// abcd()(); // It will first call the function then invoked the returned fn

// Pure & Impure Fn

let a = 20;

function pureFn() {
  console.log(a); // This fn is pure because it is not changing any value
}

function impureFn() {
  a++; // Impure insense it is changing value
}

// clouser
// A closure is created when a function remembers its outer variables even after the outer function has finished executing.

function parent() {
  let count = 0;
  return function () {
    // return fn doesn't have name -> Anonymous Fn
    return ++count;
  };
}

const child = parent();

// console.log(child());

// IIFE

(function () {
  console.log("IIFE Started");
})();
