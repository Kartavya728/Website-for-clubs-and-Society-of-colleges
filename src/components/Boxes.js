import React from 'react';
import './Boxes.css';

function Boxes({ image, name, designation, mobile, email }) {
  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <img src={image} alt={name} className="member-image" />
      </div>
      <h2 className="member-designation">{designation}</h2>
      <div className="member-info">
        <br/> <br/> <br/> <br/>
        <p>{name}</p>
        <p>{mobile}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Boxes;

