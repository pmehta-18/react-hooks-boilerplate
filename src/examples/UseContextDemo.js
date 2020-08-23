import React, { useState, useContext } from "react";

import myContext from "./MyApp";

function UseContextDemo() {
  // context will contain all values defined in the myContext.Provider of MyApp component
  const context = useContext(myContext);

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

export default UseContextDemo;
