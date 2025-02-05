import React from 'react';
import '../style.css';
// function Header() {
//   return (
//     <div>This is my first React app.</div>
//   )
// }

// export default Header;

class Header extends React.Component {
  render() {
    return (
      <>
        <p className='para'>Header Component</p>
      </>
    )
  }
}

export default Header;
