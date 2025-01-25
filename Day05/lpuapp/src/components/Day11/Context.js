import React, { createContext, useState } from "react";
import Component1 from "./Component1";

export const nameContext = createContext('');


export default function Context() {
  const [name, setName] = useState("Ankit");
  return (
    <div>
      <p>My name is : {name}</p>
      <nameContext.Provider value={name}>
        <Component1 />
      </nameContext.Provider>
    </div>
  );
}
