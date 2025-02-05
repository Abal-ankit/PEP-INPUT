import React from 'react';

function Child(props) {
  const {name, age} = props.myName;
  return (
    <div>Hi! How are you? - {name}<br/><span>You are {age} years old.</span></div>
  )
}

export default Child;
