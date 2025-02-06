import React, { useState } from 'react';

function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
        {isLoggedIn ? <h1>Welcome User</h1> : <h2>Loggin before proceeding</h2>}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Click</button>
    </div>
  )
}

export default ConditionalRendering;
