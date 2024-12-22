import { useState } from "react";

const UseStateDemo = () => {
const [counter, setCounter] = useState(0);
// let counter = 0;

const increase = () =>{
    // counter++;
    // console.log(counter);
    setCounter(counter+1);
}

const decrease = () =>{
    // counter--;
    // console.log(counter);
    setCounter(counter-1);
}

  return (
    <>
    <h2>Count Values: {counter}</h2>

    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

    </>
  );
};
export default UseStateDemo;
