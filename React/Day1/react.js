// ****** React is a Js object which basically create a virtual dom means a object which defines how the ui should look it doesn't create any dom elements or perform any dom related operations

// props = {
//   style: { backgroundColor: "pink", color: "black", fontSize: "30px" },
//   id: "first",
//   className: "ele1",
// };

const React = {
  createElement(type, props, children) {
    return {
      type: type,
      props: {
        ...props,
        children: children,
      },
    };
  },
};

const element = React.createElement(
  "h1",
  {
    style: { backgroundColor: "pink", color: "black", fontSize: "30px" },
    id: "first",
    className: "ele1",
  },
  "Hello Coder Army"
); // It will return a object means a structure of a ui element or virtual dom

console.log(element); // create a js object

// {
//   type: "h1";
//   props = {
//     style: { backgroundColor: "pink", color: "black", fontSize: "30px" },
//     id: "first",
//     className: "ele1",
//     children: "Hello",
//   };
// }

//  ***** ReactDOM performs all the dom related operation and it first flush out all the elements inside it then add children

const ReactDOM = {
  render: function (element, parent) {
    parent.innerHTML = "";

    const domEl = document.createElement(element.type);
    const { props } = element;
    for (let key in props) {
      if (key === "style") Object.assign(domEl.style, props.style);
      else if (key === "children") domEl.textContent = props.children;
      else domEl[key] = props[key];
    }
    console.log(domEl);
    parent.append(domEl);
  },
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element); // This will flush out whatever element will be present in the root then render the last inserted element

ReactDOM.render(element, document.getElementById("root"));
