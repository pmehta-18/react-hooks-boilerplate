import React, { useState } from "react";

function UseStateDemo() {
  // count is a state variable with initial value 0 and setCount is method to update the value of count state variable
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={() => handleBtnClick()}>Counter is {count}</button>
    </div>
  );
}

export default UseStateDemo;
