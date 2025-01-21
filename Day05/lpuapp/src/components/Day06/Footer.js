import React from 'react';
import '../style.css';

function Footer() {

    const student = {
        reg : 12217572,
        name : 'Ankit'
    }
    
  return (
    <div>
      <p className="para">Footer component</p>
      {/* <p>Name : {student.name}</p> */}
    </div>
  );
}

export default Footer;
