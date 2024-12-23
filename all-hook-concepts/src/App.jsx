import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import UseStateDemo from "./Components/useState/UseStateHookDemo";
import React from "react";
import Parent from "./Components/useContext/Parent";
// import Parent from "./Components/propdrilling/Parent";
// import UseRefHookDemo from "./Components/useRef/UseRefHookDemo";
// import UseEffectDemo from "./Components/useEffect/UseEffectComponentDemo";
// import UseReducerDemo from "./Components/useReducer/UseReducerHookDemo";

function App() {



  return (
    <>
     <h2> All React hooks </h2>
     {/* <UseStateDemo></UseStateDemo> */}
     {/* <UseReducerDemo></UseReducerDemo> */}
     {/* <UseEffectDemo></UseEffectDemo> */}
     {/* <UseRefHookDemo></UseRefHookDemo> */}

     {/* Understanding concept of prop drilling */}
     {/* <Parent /> */}

     {/* Using Concept of Context Api to avoid prop drilling */}
     <Parent></Parent>

    </>
  );
}

export default App;
