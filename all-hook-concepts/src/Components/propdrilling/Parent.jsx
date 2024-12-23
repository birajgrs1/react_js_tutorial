import React, { useState } from "react";
import ChildA from "./ChildA";

const Parent = () => {
  const [fName, setfName] = useState("firstName");
  const [lName, setlName] = useState("LastName");

  return (
    <>
      <h4>Hi, I am a parent component.</h4>
      <ChildA fName={fName} lName={lName} />
    </>
  );
};

export default Parent;
