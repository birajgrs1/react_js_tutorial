import React from "react";

const ChildC = ({ fName, lName }) => {
  return (
    <>
      <p>This is Child C component.</p>
      <h3>Data from Parent component is as follows:</h3>
      <h4>{fName}</h4>
      <h4>{lName}</h4>
    </>
  );
};

export default ChildC;
