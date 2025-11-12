// Adding element before and after

const newPara = document.createElement("p");
newPara.textContent = "This is a paragraph created by JavaScript";
newPara.id = "paraTwo";

// console.log(newPara);

// Selecting Element

const h2Element = document.querySelector("h2");
// h2Element.after(newPara); // this will insert the element after the selected element

// h2Element.before(newPara);

const h3 = document.createElement("h3");
h3.innerHTML = "I am a h3 tag ";
// h3.id = "third";
h3.setAttribute("id", "third");
// h3.className = "head";  // This will add the class property value
// h3.className += " blue";  // This will create multiple class value in the element object remember have to give a space before the value

h3.classList.add("head");
h3.classList.add("blue");
// h3.classList.toggle("dark"); // If the class exists then remove it else add the class-value into element
// console.log(h3.classList.contains("blue")); // If class exists return true

h3.classList.remove("blue");

h3.style.color = "pink"; // adding css style

h2Element.after(h3);
// console.log(h3);
// console.log(h3.getAttribute("id"));

//  Adding child element

const ul = document.getElementById("listings");

// // console.log(ul);

// const list = document.createElement("li");
// list.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Sugar";

// ul.append(list, list2); // append() ---> add element from rear / end

// const list3 = document.createElement("li");
// list3.textContent = "Tea";

// ul.prepend(list3); // prepend() --- > add element from the front

const foods = ["Milk", "Tea", "Sugar", "Water", "Biscuits"];
// const fragment = document.createDocumentFragment();

// for (let food of foods) {
//   const list = document.createElement("li");
//   list.textContent = food;
//   //   ul.append(list); // This is not optimized because loop will run manytimes and everytimes the ui will get rendered
//   fragment.appendChild(list);
// }

// ul.append(fragment);

const listArr = [];

for (let food of foods) {
  const list = document.createElement("li");
  list.textContent = food;
  listArr.push(list);
}

ul.append(...listArr);
