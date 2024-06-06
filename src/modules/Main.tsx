import { Outlet } from 'react-router';
import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (<>
    <header>
        <Link className='nav-item' to='/'>Home</Link>
        <Link className='nav-item' to='project'>Projects</Link>
        <Link className='nav-item' to='blog'>Blog</Link>
        <Link className='nav-item' to='art'>Art</Link>
    </header>
    
    <main>
      <Outlet/>
    </main>
  </>);
}

export default Main;
