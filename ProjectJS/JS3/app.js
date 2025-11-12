const form = document.querySelector("form");
const boy = document.getElementById("boy");
const girl = document.getElementById("girl");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let totalLength = boy.value.length + girl.value.length;
  let result = Math.pow(totalLength, 3) % 101;
  document.querySelector("h2").innerText = `Result : ${result}`;
});
