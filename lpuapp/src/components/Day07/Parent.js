import React from 'react';
import Child from './Child';

function Parent() {
  const user = {
    RegNo: 100,
    name: "Ankit",
    age: 15,
  };

  return (
    <div>
        <Child myName={user} />
    </div>
  )
}

export default Parent;
