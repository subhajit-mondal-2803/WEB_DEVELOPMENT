// Objects

const user = {
  fname: "Subhajit",
  lname: "Mondal",
  age: 21,
  isAdult: true,
  address: {
    city: "Durgapur",
    state: "West Bengal",
  },
  favouriteColor: ["white", "black", "sage green"],
};

// access

// console.log(user.fname, user.lname);
// console.log(user.address.city, user.address.state);
// console.log(user.favouriteColor[0]);
// console.log(user["age"]);

// destructure

let { city, state } = user.address;

const users = {
  "first-name": "Subhajit",
};

let { "first-name": firstName } = users;
console.log(firstName);

// console.log(city, state);

// for-in loop : gets the key of object

// for (let key in user) {
//   console.log(key, user[key]);
// }

// console.log(Object.keys(user)); // return a array of keys

// console.log(Object.entries(user));
// [
//   [ 'fname', 'Subhajit' ],
//   [ 'lname', 'Mondal' ],
//   [ 'age', 21 ],
//   [ 'isAdult', true ],
//   [ 'address', { city: 'Durgapur', state: 'West Bengal' } ],
//   [ 'favouriteColor', [ 'white', 'black', 'sage green' ] ]
// ]

// Copy object

// const userClone = { ...user };
// const userClone = Object.assign({tag:111}, user);

// deep clone

const userClone = JSON.parse(JSON.stringify(user));
// console.log(userClone);

// optional chaining

// console.log(user?.address?.city); //it checks property exists or not if  not exist return undefined

// computed property

let role = "admin";

let obj = {
  isLoggedIn: true,
  [role]: true, // admin : true
};

// console.log(obj);
