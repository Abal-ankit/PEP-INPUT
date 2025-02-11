import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/about' >About Us</Link></li>
                    <li><Link to='/contact' >Contact</Link></li>
                    <li><Link to='/products' >Products</Link></li>
                </ul>
            </nav>
        </header>
        <main>
        <Outlet />
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Root
