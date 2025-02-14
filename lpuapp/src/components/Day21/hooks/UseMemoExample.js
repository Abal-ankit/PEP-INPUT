import React, { useMemo, useState } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState("false");
  //   const calc = longFunction(number);

  const memoCalc = useMemo(() => {
    longFunction(number);
  }, [number]);

  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={cssStyle}>
      <h2>Use Memo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Calculation : {memoCalc}</h2>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}

function longFunction(num) {
  for (let i = 0; i < 1000000000; i++);
  return num;
}

export default UseMemoExample;
