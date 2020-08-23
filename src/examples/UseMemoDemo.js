import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setArray([...array, count]);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // this is recomputated only when array mutates
  const heavyComputation = useMemo(() => {
    return array.reduce((a, b) => a + b, 0);
  }, [array]);

  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <div>Counter is {count}</div>
      <div>Sum is {heavyComputation}</div>
    </div>
  );
}

export default UseMemoDemo;
