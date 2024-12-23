import React from "react";
import ChildC from "./ChildC";

const ChildB = ({ fName, lName }) => {
  return (
    <>
      <p>I am a Child B component.</p>
      <ChildC fName={fName} lName={lName} />
    </>
  );
};

export default ChildB;
