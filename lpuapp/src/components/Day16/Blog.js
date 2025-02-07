import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Blog() {
  return (
    <div>
        <h1>Blog Page</h1>
        <nav>
            <Link to="post1">Post 1</Link> | <Link to="post2">Post 2</Link>
        </nav>
        {/* <Outlet /> */}
    </div>
  )
}

export default Blog
