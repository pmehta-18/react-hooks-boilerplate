import React, { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // this will be triggered everytime component re-renders
    console.log("Count value is changed");
    return () => {
      // this will be triggered everytime component unmounts
      console.log("Component is going to be unmounted");
    };
  });

  return (
    <div>
      <button onClick={() => handleBtnClick()}>Counter is {count}</button>
    </div>
  );
}

export default UseEffectDemo;
