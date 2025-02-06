import React, { useRef } from 'react';

function FormUseRef() {
    const inputRef = useRef(null);

    const handleForm = (e) => {
        e.preventDefault();
        alert(inputRef.current.value);
    }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Enter text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormUseRef;
