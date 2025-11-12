// const btn = document.querySelectorAll("button");
// // console.log(div);

// btn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = btn.getAttribute("id");
//   });
// });

const div = document.querySelector(".container");

// console.log(div.children);

// for (let btn of div.children) {
//   btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = btn.getAttribute("id");
//   });
// }

div.addEventListener("click", (event) => {
  console.log(event.target);
  document.body.style.backgroundColor = event.target.getAttribute("id");
});
