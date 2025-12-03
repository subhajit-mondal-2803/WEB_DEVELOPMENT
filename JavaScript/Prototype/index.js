const obj = {
  name: "Subhajit",
  age: 20,
  greet() {
    console.log("hello");
  },
};

// console.log(obj.__proto__); // It will show the parent of the object which is Object.prototype in case of arrray it is Array.prototype and Array.prototype parent is Object.prototype

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log("Hello");
  }
}

const p1 = new Person("Ab", 22);
console.log(p1);
// Method get store in Person.prototype

class Customer extends Person {
  constructor(name, age, account, balance) {
    super(name, age);
    this.account = account;
    this.balance = balance;
  }
  showCustomer() {
    console.log(`${this.name} , ${this.age} , ${(this.account, this.balance)}`);
  }
}
