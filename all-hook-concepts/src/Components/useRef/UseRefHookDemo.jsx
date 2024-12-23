import React, { useRef } from "react";

const UseRefHookDemo = () => {
  /*
    It creates a mutable variable which will not re-render the components.
    --> Used to access a DOM element directly.
    It accepts only one initial value.

Syntax:

const refContainer = useRef(initialValue);
  */

  const myRef = useRef(null);
  console.log("Reference object:", myRef);

  const focusInput = () => {
    if (myRef.current) {
      myRef.current.focus();
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          ref={myRef}
        />
      </div>

      <button className="btn btn-info" onClick={focusInput}>
        Focus
      </button>
    </>
  );
};

export default UseRefHookDemo;
