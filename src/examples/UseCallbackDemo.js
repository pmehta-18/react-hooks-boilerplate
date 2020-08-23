import React, { useState, useCallback } from "react";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  // method is created only when count value changes
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // method is created only when count value changes
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <div>Counter is {count}</div>
    </div>
  );
}

export default UseCallbackDemo;
