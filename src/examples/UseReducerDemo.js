import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      console.log("Out of reach!");
  }
}

function UseReducerDemo() {
  const [state, dispatcher] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatcher({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatcher({ type: "decrement" })}>
        Decrement
      </button>
      <div>Count is {state.count}</div>
    </div>
  );
}

export default UseReducerDemo;
