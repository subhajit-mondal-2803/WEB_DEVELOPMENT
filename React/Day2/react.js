// JSX, Babel, React Components, props

// const element = React.createElement("h1", { id: "title" }, "Hello"); // it will create a React specific Js object

// const element_2 = React.createElement(
//   "div",
//   null,
//   React.createElement("h1",null, "Hello"),
//   React.createElement("h2",null, "hi")
// ); // This syntax is not easy

// -----------------------------------------------------------------------------

// JSX --> javascript XML ( Look like HTML )

// Babel Convert this jsx to React.createElement here, type ="text/babel"

// <h1 id='title'>Hello</h1>  ---> React.createElement("h1", { id: "title" }, "Hello")----> {type:'h1',props:{id:'title', children:"hello"}} ---> ReactDOM --->Dom Element

// JSX ----> React.createElement ----> React element ( JS object)--->ReactDOM--->Dom element

// Babel -> React -> ReactDOM

// Jsx and html are different here in Jsx we use className instead of class

// const element = <h1 id="title" className="heading">Hello</h1>;

// When there are multiline code of jsx use '(jsx)' paranthesis for good practice

// const element = (
//   <div>
//     <h1>Hello</h1>
//     <h2>World</h2>
//   </div>
// );

// -----------------------------------------------------------------------------

// React Component : Component is just a fn which return Jsx ,
// Call component : App() or <App/>

// function App() {
//   return <h1>Hello World</h1>;
// }

// -----------------------------------------------------------------------------

// React props : basically tag attributes comes as a props object
// props={name:"Nini", age:30}

// Using {} --> inside {} you can write js expressions that generate single value
//  {} can be used for text / element
// Number , String , array ✅
// true, false, null, undefined ---> show nothing
// Object ❌ but in attribute we can use it

// style goes as a object

// function App({name,age}) { //destructure
//   return <h1 style={{backgroundColor:"pink",color:"black",padding:"1rem"}}>Hello, {name ? name : "Anonymus"}, {age}</h1>;
// }

// const element = App();
// React.createElement("App",{name:"Nini",age:30});
// const element = <App name="Nini" age={30} />;

// -----------------------------------------------------------------------------

function Header({ name }) {
  return <h1>Welcome to our website, {name}</h1>;
}

function Main({ courses }) {
  // courses is an array
  return (
    <div>
      <h2>Courses we provide :</h2>
      <ul>
        {courses.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return <footer>&copy;2025</footer>;
}

// function App() {
//   return (
//     <div>
//       <Header name="Nini" />
//       <Main courses={["Html","Css","Js","React"]} />
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <> //Fragment
      <Header name="Nini" />
      <Main courses={["Html", "Css", "Js", "React"]} />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); // This will selct the root element or parent

root.render(<App />); // here we give reactDOM the element reactDom Create a dom element and add it to the root
