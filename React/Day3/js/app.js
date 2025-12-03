// const p = document.querySelector("p");
// const btn = document.querySelector("button");

// let count = 0;

// btn.addEventListener("click", () => {
//   ++count;
//   //   p.textContent = `Counter : ${count}`;

//   //   or
//   p.textContent = "";
//   let child = document.createTextNode(`Counter : ${count}`);
//   p.append(child);
// });


function useState(value){

    let count = value;

    function setCount(value){
        count = value;
    }

    return [count,setCount];
}


let [count,setCount] = useState(0);

// console.log(count,setCount);

function increase(){
    setCount(++count);
}

increase();
increase();
increase();
increase();
increase();

console.log(count);
