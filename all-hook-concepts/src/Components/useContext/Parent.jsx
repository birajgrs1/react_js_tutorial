import React, {useState} from 'react';
import context from '../../Store/Contexts/Context-demo';
import ChildA from "./ChildA";

const Parent = () => {
    const [fName, setfName] = useState("firstName");
    const [lName, setlName] = useState("LastName");
  
    return (
      <context.Provider value={{ fName, lName }}>
        <div>This is a Parent component</div>
        <br />
        <ChildA />
      </context.Provider>
    );
  };
  
  export default Parent;