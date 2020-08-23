import React, { useState } from "react";

export const myContext = React.createContext();

function MyApp() {
  const [myAppVariable, setMyAppVariable] = useState(0);

  return (
    <myContext.Provider
      value={{
        myAppVariable: myAppVariable
      }}
    >
      <div>myAppVariable value is {myAppVariable}</div>
      <button onClick={() => setMyAppVariable(myAppVariable * 2)}>
        myAppVariable
      </button>
    </myContext.Provider>
  );
}

export default MyApp;
