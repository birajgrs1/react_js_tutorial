import "./App.css";
// import UseStateDemo from "./Components/useState/UseStateHookDemo";
import React from "react";
import UseEffectDemo from "./Components/useEffect/UseEffectComponentDemo";
// import UseReducerDemo from "./Components/useReducer/UseReducerHookDemo";

function App() {

  return (
    <>
     <h2> All React hooks </h2>
     {/* <UseStateDemo></UseStateDemo> */}
     {/* <UseReducerDemo></UseReducerDemo> */}
     <UseEffectDemo></UseEffectDemo>
    </>
  );
}

export default App;
