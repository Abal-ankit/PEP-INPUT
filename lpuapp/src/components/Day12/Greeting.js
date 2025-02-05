import React from 'react';

function Greeting() {
  return (
    <div>Greeting</div>
  );
}

function AdminGreeting() {
    return (
        <div>Hello, It's admin greeting you!</div>
    );
}

function UserGreeting() {
    return (
        <div>Hello, It's user greeting you!</div>
    );
}

export default Greeting;
export {AdminGreeting, UserGreeting};
