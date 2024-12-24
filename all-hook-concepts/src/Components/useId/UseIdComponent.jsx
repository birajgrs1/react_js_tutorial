import React, { useId } from 'react';

function UseIdDemo() {
  const id = useId(); 

  return (
    <form>
      <div>
        <label htmlFor={`${id}-email`}>Email:</label>
        <input id={`${id}-email`} type="email" />
      </div>
      <div>
        <label htmlFor={`${id}-password`}>Password:</label>
        <input id={`${id}-password`} type="password" />
      </div>
    </form>
  );
}

export default UseIdDemo;
