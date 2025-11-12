const form = document.querySelector("form");
const income = document.getElementById("income");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let amount = parseInt(income.value);
  // let amount = Number(income.value);
  let taxAmount;
  if (amount < 1200000) {
    taxAmount = 0;
  } else if (taxAmount < 1600000) {
    taxAmount = (amount - 1200000) * 0.15;
  } else if (taxAmount < 2000000) {
    taxAmount = 60000 + (amount - 1600000) * 0.2;
  } else if (taxAmount < 2400000) {
    taxAmount = 60000 + 80000 + (amount - 2000000) * 0.25;
  } else {
    taxAmount = 60000 + 80000 + 100000 + (amount - 2400000) * 0.3;
  }

  document.querySelector("h2").innerText = `Tax Amount is : ${taxAmount}`;
});
