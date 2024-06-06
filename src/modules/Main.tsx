import { Outlet } from 'react-router';
import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (<>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='project'>Projects</Link>
        <Link to='blog'>Blog</Link>
        <Link to='art'>Art</Link>
    </nav>
    
    <main>
      <Outlet/>
    </main>
  </>);
}

export default Main;
