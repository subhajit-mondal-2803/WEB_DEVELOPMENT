// This KeyWord

"use strict";
// var a = 10;
// b = 20;

// console.log(a,b); // It will work without strict mode

// console.log(this); // In node it refers to empty Object in browser it refers to Window

// const user = {
//   name: "Subha",
//   age: 21,
//   greet() {
//     console.log(this);
//     console.log(`Hi , ${this.name}`);
//   },
// };

// const user2 = {
//   name: "Mohit",
//   age: 20,
// };

// user2.greet = user.greet; // It will create a property in the user2 which is greet() method

// user2.greet();

function greet() {
  console.log(`Hi , ${this.name}`);
}

const user1 = {
  name: "Jack",
};

const user2 = {
  name: "Osac",
};

// user1.greet() ; // ❌

greet.call(user1);
