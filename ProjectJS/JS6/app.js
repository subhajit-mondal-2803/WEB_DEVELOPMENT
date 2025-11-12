const p = document.querySelector("#result");

setInterval(() => {
  const finalDate = new Date(2026, 4, 24).getTime();
  // console.log(finalDate);

  let today = Date.now();
  // console.log(today);

  let reaminingTime = finalDate - today;
  // console.log(reaminingTime);

  let day = Math.trunc(reaminingTime / (1000 * 60 * 60 * 24));
  reaminingTime %= 1000 * 60 * 60 * 24;

  let hour = Math.trunc(reaminingTime / (1000 * 60 * 60));
  reaminingTime %= 1000 * 60 * 60;

  let min = Math.trunc(reaminingTime / (1000 * 60));
  reaminingTime %= 1000 * 60;

  let second = Math.trunc(reaminingTime / 1000);

  p.textContent = `${day} Days ${hour} hours ${min} minutes ${second} seconds`;
}, 1000);
