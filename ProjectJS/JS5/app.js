const h1 = document.querySelector("h1");

setInterval(() => {
  const time = new Date();
  h1.innerText = time.toLocaleTimeString("en-IN", { hour12: false });
}, 1000);
