import React, {useRef} from 'react';

function FocusInputUseRef() {
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <input type='text' placeholder='Enter text here' ref={inputRef}/>
        <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default FocusInputUseRef;
