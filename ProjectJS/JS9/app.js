const form = document.querySelector("form");
const allTask = document.querySelector(".alltask");
const input = document.querySelector("#task");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let task = input.value.trim();
  if (!task) {
    return;
  }
  /* Parent Element div */

  const divParent = document.createElement("div");
  divParent.classList.add("task-item");

  //   Task name children of div
  const span = document.createElement("span");
  span.textContent = task;
  span.classList.add("task-text");

  //   div which contains two button and it is the child of parent div
  const divBtnContainer = document.createElement("div");
  divBtnContainer.classList.add("task-buttons");

  //   Done button
  const doneBtn = document.createElement("button");
  doneBtn.type = "button";
  doneBtn.textContent = "✅";
  doneBtn.addEventListener("click", () => {
    span.style.textDecoration = "line-through";
    span.style.color = "#777";
  });

  //   Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    divParent.remove();
  });

  divBtnContainer.append(doneBtn, deleteBtn);
  divParent.append(span, divBtnContainer);
  allTask.append(divParent);

  form.reset();
});
