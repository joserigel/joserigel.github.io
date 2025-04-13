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
          Hi, my name is Jose Rigel, a Computer Science Student @ RWTH Aachen University. 
          At the moment, I am on track to finish my studies in 2026 as I'm in my 5<sup>th</sup> Semester.
        </p>
        <p>
          My interest in software engineering includes <em>Computer Graphics, 
            Computer Vision and Web Development</em>. 
            Currently, I am interning at <em>Tesla</em> as a <em>Software Engineer</em>, 
            developing software for internal use in <em>
            Giga Factory Berlin Brandenburg</em>. 
            Previously, I worked in the <em>R&D Department</em> of <em>Aptiv</em>,
            developing internal tools used to annotate computer vision data.
        </p>
        <p>
          I'm always open to a conversation and new challenges! Let's connect!
        </p>
      </div>

      <div className='card employment'>
        <h1>My Experiences</h1>
        <div>
          <img src="/icons/tesla.svg"/>
          <h3>Software Engineer Working Student</h3>
          <h4>April 2025 - Present</h4>
        </div>
        <div>
          <h3>Software Engineer Intern</h3>
          <h4>October 2024 - March 2025</h4>
        </div>
        <div>
          <img src="icons/aptiv.svg"/>
          <h3>Full-stack Working Student Developer</h3>
          <h4>May 2023 - April 2025</h4>
        </div>
      </div>

      <div className='card'>
        <h1>Contacts</h1>
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
