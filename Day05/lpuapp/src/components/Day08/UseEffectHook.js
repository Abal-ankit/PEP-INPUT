import React, {useState, useEffect} from 'react';

function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(count * 2);
    }, [count]);

  return (
    <div style={{"text-align" : "center"}}>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>Calculation : {calculation}</p>
    </div>
  );
}

export default UseEffectHook;
