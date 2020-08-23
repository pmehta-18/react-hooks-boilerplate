import React, { useImperativeHandle, useRef, forwardRef } from "react";

function UseImperativeHandleDemo() {
  const childRef = useRef(null);

  const handleBtnClick = () => {
    // invoking child component's method from parent component
    childRef.current.print();
  };

  return (
    <>
      <button onClick={() => handleBtnClick()}>Parent Div</button>
      <Child ref={childRef} />
    </>
  );
}

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      print: () => {
        console.log("child method invoked!");
      }
    };
  });

  return <button>Child Div</button>;
});

export default UseImperativeHandleDemo;
