import React from 'react';
import './Home.css'

function Home() {
  return (<>
    <div className='blob offset'>
      <div className='dark-shadow'/>
    </div>

    <div className='blob'>
      <div className='pink-red-gradient'/>
    </div>

    <div className='name-title'>
      <h1>JOSE</h1>
      <h1>RIGEL</h1>
    </div>
    
    <img className='waves' src='/waves.svg' alt='waves'/>

    <article className='fade-to-header invisible-scroll'>
      <h1 className='name-title-alt'>Hello!</h1>
      <div className='card'>
        <p>
          Hi, my name is Jose Rigel, a Computer Science Student @ RWTH Aachen University. At the moment, I am on track to finish my studies in 2025 as I'm in my 4<sup>th</sup> Semester.
        </p>
        <p>
          I'm currently looking for new challenges in Software Engineering, specifically in Working Student positions or Full Time Internships. During my second and third semester of my study, I worked in the automotive industry as a part time Full-Stack Software Developer.
        </p>
        <p>
          Now I'm currently studying to expand my knowledge in many parts of Computer Science!
        </p>
      </div>

      <div className='card'>
        <ul>
          <li>
            <img className='icon' src="/icons/gmail.png" alt='gmail'/>
            <a className='contact-button' rel="noopener noreferrer" target="_blank" href="mailto:joserigel18@gmail.com">joserigel18@gmail.com</a>
          </li>
          <li>
            <img className='icon' src="/icons/LinkedIn.png" alt='LinkedIn'/>
            <a className='contact-button' rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/joserigel/">joserigel</a>
          </li>
          <li>
            <img className='icon' src="/icons/github-white.svg" alt='GitHub'/>
            <a className='contact-button' rel="noopener noreferrer" target="_blank" href="https://github.com/joserigel">joserigel</a>
          </li>
        </ul>
      </div>
    </article>

  </>);
}

export default Home;
