import { Outlet } from 'react-router';
import './Main.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BurgerProps {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean
}

function Burger({setExpanded, expanded}: BurgerProps) {
  return (<div onClick={() => setExpanded((x) => !x)}
    className={`burger ${expanded ? 'cross' : ''}`}>
    <div/>
    <div/>
    <div/>
  </div>);
}

function Main() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function onWindowResize(event: any) {
      if (event.target.innerWidth > 967) {
        setExpanded(false);
        setIsMobile(false);
      } else if (!isMobile) {
        setTimeout(() => setIsMobile(true), 400);
      }
    }
    window.addEventListener('resize', onWindowResize);
    onWindowResize({target: {innerWidth: window.innerWidth}});

    return () => window.removeEventListener('resize', onWindowResize)
  });

  return (<>
    <Burger expanded={expanded} setExpanded={setExpanded}/>
    <header className={`${expanded ? 'expanded' : ''}`}
      style={{transitionDuration: isMobile ? '0.2s' : '0s'}}
    >
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
