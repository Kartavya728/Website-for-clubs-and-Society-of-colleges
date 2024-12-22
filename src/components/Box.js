import React, { useState } from 'react';
import Bigscr from './Bigscr';

function Box({ onButtonClick, content, image, atle, txt, Delay,Heading }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onButtonClick(content); // Trigger parent callback to handle dynamic content
  }; 

  return (
    <div className="s-box" style={{ animationDelay: `${Delay}s` }}>
      <div className="s-b-img">
        <img src={image} alt={atle} />
        <br/>
      </div>
      <div className='s-heading-12'><h2>{Heading}</h2></div>
      <div className="s-b-text">
        <p>{txt}</p>
        <br />
        </div>
        <button onClick={handleClick} className="cvs-btn">
          Read More
        </button>
    

    </div>
  );
}

export default Box;



