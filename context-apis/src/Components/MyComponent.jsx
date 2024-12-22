import React, { useContext } from "react";
import CounterContext from "../Contexts/Counter";

const MyComponent = () => {
  const { count } = useContext(CounterContext);
  return <>{count}</>;
};

export default MyComponent;