const color = [
  "#FF6B6B", // Vibrant Red
  "#FFD93D", // Warm Yellow
  "#6BCB77", // Fresh Green
  "#4D96FF", // Bright Blue
  "#9B5DE5", // Purple
  "#F15BB5", // Pink
  "#00BBF9", // Sky Blue
  "#00F5D4", // Aqua
  "#FF8C42", // Orange
  "#E63946", // Deep Coral
  "#2A9D8F", // Teal
  "#264653", // Dark Blue Gray
  "#F4A261", // Sand Orange
  "#E9C46A", // Soft Gold
  "#457B9D", // Cool Blue
  "#1D3557", // Navy Blue
  "#B5838D", // Mauve
  "#FFB4A2", // Peach
  "#A8DADC", // Light Cyan
  "#CDB4DB", // Lavender
];

document.body.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);

  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");
  circleElement.textContent = "HI";
  circleElement.style.backgroundColor =
    color[Math.trunc(Math.random() * color.length)];

  circleElement.style.top = `${e.clientY}px`;
  circleElement.style.left = `${e.clientX}px`;

  document.body.append(circleElement);

  setTimeout(() => {
    circleElement.remove();
  }, 3000);
});

// console.log(color[Math.trunc(Math.random() * color.length)]);
