import React from "react";

function App() {
  // const handleClick = () => {
  //   alert("Button Clicked!!!");
  //   console.log("You clicked the button.");
  // };
  const handleChange = (event) => {
    console.log("Input changed to:", event.target.value);
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered the button!");
  };

  const handleMouseLeave = () => {
    console.log("Mouse left the button!");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
      <button
        // onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover or Click Me
      </button>
    </>
  );
}
export default App;
