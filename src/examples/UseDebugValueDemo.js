import React, { useEffect, useState, useDebugValue } from "react";

const useCustomHook = (msg, delay) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage(msg);
    }, delay);
  });
  useDebugValue(message ? "Now set!!" : "Still not set!!");
  return message;
};

function UseDebugValueExample() {
  const customHookMsg = useCustomHook("Custom hook is working fine!", 3000);
  return <div>{customHookMsg}</div>;
}

export default UseDebugValueExample;
