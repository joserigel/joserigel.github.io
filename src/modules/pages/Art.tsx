import React, { useState } from 'react';
import './Art.css';

function Art() {
  const [show, setShow] = useState('');
  const sources = [
    ['femaleportrait-preview.jpg', 'femaleportrait.jpg'],
    ['gwenstacy-preview.png', 'gwenstacy.png'],
    ['manportrait-preview.jpg', 'manportrait.jpg'],
    ['spiderman-preview.png', 'spiderman.png'],
    ['wonderwoman-preview.jpg', 'wonderwoman.jpg']
  ];

  return (<>
    <img src='/Lines.svg' className='lines' alt='Lines'/>

    <div className={`zoom ${show.length > 0 ? 'zoom-show': ''}`}>
      <img src='/cross.svg' className='cross' onClick={() => setShow('')}/>
      <img src={`/arts/${show}`} className='main-img' alt='show'/>
    </div>

    <div className='circle pink-red-gradient'/>

    <div className='grid fade-to-header invisible-scroll'>
      {sources.map((img, i) => <img key={i}
        className='bobble'
        alt={img[1]} onClick={() => setShow(img[1])}
        src={`/arts/preview/${img[0]}`}
      />)}
    </div>
  </>);
}

export default Art;
