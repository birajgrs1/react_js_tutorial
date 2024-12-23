import React, { useContext } from "react";
import context from "../../Store/Contexts/Context-demo";
const ChildC = () => {
  const { fName, lName } = useContext(context);

  return (
    <>
      This is ChildC component.
      <br />
      <h3> Data from Parent component is as follows:</h3>
      <h4>{fName}</h4>
      <h4>{lName}</h4>
    </>
  );
};

export default ChildC;
