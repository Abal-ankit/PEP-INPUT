import React, { useState, useRef, useEffect } from 'react';

function PreviousValueUseRef() {
    const [counter, setCounter] = useState(0);
    const prevCountRef = useRef(null);

    useEffect(()=>{
        prevCountRef.current = counter;
    }, [counter]);
  return (
    <div>
        <h2>Current Counter : {counter}</h2>
        <h3>Previous Counter : {prevCountRef.current}</h3>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </div>
  )
}

export default PreviousValueUseRef;
