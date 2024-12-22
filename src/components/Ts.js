import React from "react";

const Ts = ({ content, handleClick, fadeClass, image ,heading}) => {
  return (
    <div className={`overlay-${fadeClass}`}>
      <div className="popup-widget">
        <div className="popup-widget-content">
          <img src={image} alt="Popup image" className="popup-image" />
          <div className="popup-text">
            <div className="popup-heading">{heading}</div>
            <p className="popup-description">{content}</p>
          </div>
        </div>
        <button onClick={handleClick} className="popup-button">Close</button>
      </div>
    </div>
  );
};

export default Ts;


