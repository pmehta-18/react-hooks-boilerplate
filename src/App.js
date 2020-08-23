import React from "react";
import UseStateDemo from "./examples/UseStateDemo";
import UseEffectDemo from "./examples/UseEffectDemo";
import UseContextDemo from "./examples/UseContextDemo";
import UseCallbackDemo from "./examples/UseCallbackDemo";
import UseMemoDemo from "./examples/UseMemoDemo";
import UseRefDemo from "./examples/UseRefDemo";
import UseReducerDemo from "./examples/UseReducerDemo";
import UseImperativeHandleDemo from "./examples/UseImperativeHandleDemo";
import UseDebugValueDemo from "./examples/UseDebugValueDemo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={"example"}>
        <h2>useState Demo</h2>
        <UseStateDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useEffect Demo</h2>
        <UseEffectDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useContext Demo</h2>
        <UseContextDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useCallback Demo</h2>
        <UseCallbackDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useMemo Demo</h2>
        <UseMemoDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useRef Demo</h2>
        <UseRefDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useReducer Demo</h2>
        <UseReducerDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useImperativeHandle Demo</h2>
        <UseImperativeHandleDemo />
      </div>
      <hr />
      <div className={"example"}>
        <h2>useDebugValue Demo</h2>
        <UseDebugValueDemo />
      </div>
      <hr />
    </div>
  );
}

export default App;
