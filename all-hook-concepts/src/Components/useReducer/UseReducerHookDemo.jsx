import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const UseReducerDemo = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h5>Counter: {count}</h5>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </>
  );
};
export default UseReducerDemo;
