// React

// const h1 = document.createElement("h1");
// h1.textContent = "Hello";
// h1.classList.add("heading");
// h1.id = "first";
// h1.style.backgroundColor = "pink";
// h1.style.color = "black";
// h1.style.fontSize = "30px";

// const h2 = document.createElement("h2");
// h2.textContent = "Welcome";
// h2.classList.add("heading");
// h2.id = "second";
// h2.style.backgroundColor = "beige";
// h2.style.color = "black";
// h2.style.fontSize = "20px";

// function createElement(tag, attributes, children) {
//   const element = document.createElement(tag);
//   element.textContent = children;

//   for (let key in attributes) {
//     if (key === "style") Object.assign(element.style, attributes.style);
//     else element[key] = attributes[key];
//   }

//   return element;
// }

//  React is basically a object which create the element object and returns it and ReactDom takes it and add it into dom

const React = {
  createElement(tag, attributes, children) {
    const element = document.createElement(tag);
    element.textContent = children;

    for (let key in attributes) {
      if (key === "style") Object.assign(element.style, attributes.style);
      else element[key] = attributes[key];
    }

    return element;
  },
};

// ReactDom is a object of js which actually do operations with browser dom

const ReactDOM = {
  render(children, parent) {
    parent.append(children);
  },
};

// in custom react we are basially cretaing the dom element and using ReactDom just adding the element into the dom

const element_1 = React.createElement(
  "h1",
  {
    className: "head",
    id: "first",
    style: { backgroundColor: "pink", color: "black" },
  },
  "Hello"
);

const root = document.getElementById("root");
// root.append(element_1);
ReactDOM.render(element_1,root);
