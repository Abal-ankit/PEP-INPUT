import React from 'react';

function BasicEvents() {
    const handleButtonClick = (event) => {
        // console.log(event.type);
        // console.log(event.target);
        console.log(event); // event is synthetic event here
    }
  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default BasicEvents;
