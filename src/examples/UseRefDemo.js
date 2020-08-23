import React, { useState, useRef } from "react";

function UseRefDemo() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const increment = () => {
    setCount(count + 1);
    console.log(counterRef.current);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(counterRef.current);
  };

  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <div ref={counterRef}>Count is {count}</div>
    </div>
  );
}

export default UseRefDemo;
