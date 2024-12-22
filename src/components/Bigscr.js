import React from 'react';

function Bigscr({ isClicked }) {
  if (!isClicked) return null; // If not clicked, render nothing

  return (
    <div className="overlay">
      <div className="thank-you-widget">
        <h1>Thank You!</h1>
      </div>
    </div>
  );
}

export default Bigscr;


