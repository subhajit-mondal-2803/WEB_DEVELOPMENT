// https://api.github.com/users

// fetch("https://api.github.com/users")
//   .then((response) => {
//     //   console.log(response);
//     // console.log(response.json());
//     if (!response.ok) {
//       throw new Error("Something Wrong ");
//     }
//     return response.json(); // Js object conversion
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// JavaScript Object to JSON Format

// const jsObj = {
//   name: "Subhajit",
//   age: "21",
//   address: {
//     city: "durgapur",
//     state: "West Bengal",
//   },
//   greet() {
//     console.log(` Hello , ${this.name}`);
//   },
// };

// // jsObj.greet();

// const JSON_Format = JSON.stringify(jsObj);
// console.log(JSON_Format); // JSON basically a string format . It doesn't support undefined and function in it

// JSON to JavaScript Object

const jsonFormat = `{
    "name":"Subhajit",
    "age":21,
    "address":"Durgapur, West Bengal"
}`;

const jsObject = JSON.parse(jsonFormat);
// console.log(jsObject);

// Promise Creation

const pro = new Promise((resolve, reject) => {
  resolve({
    fullfilled: "Ok",
  });
});

pro
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("I will execute everytime");
  });
