import React from "react";
import ChildB from "./ChildB";

const ChildA = ({ fName, lName }) => {
    return (
      <>
        <p>I am a Child A component.</p>
        <ChildB fName={fName} lName={lName} />
      </>
    );
  };
  export default ChildA;
