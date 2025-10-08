const useStateCode = `
import React, { useState } from "react";

function UseStateExample() {
  //here count is current state(intial value) 
  //we can write any type of value  
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You click me {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me 👆🏾</button>
    </div>
  );
}

export default UseStateExample;
`;

export default useStateCode;
