import React, { useContext } from "react";
import { nameContext } from "./Context";


function Component2() {
  const name = useContext(nameContext);
  return (
    <div>
      <p>Component 2 is here</p>
      <p>My name is {name}</p>
    </div>
  );
}

export default Component2;
