import React, { useContext } from "react";
import CounterContext from "../Contexts/Counter";
import styles from "./ButtonComponent.module.css"

const ButtonComponent = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <p>
        Current Count: {count}
      </p>
      <button
        type="button"
        // className="btn btn-primary"
        className= {styles.button}

        onClick={() => setCount((count) => count + 1)}
      >
        Click me to increase count
      </button>
    </>
  );
};

export default ButtonComponent;