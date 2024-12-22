import React from "react";

const ScrollableMembers = ({ data, fadeClass ,close}) => {
  return (
    <div className={`overlay-${fadeClass}`}>
      <div className="popup-widget">
        <div className="popup-widget-content scrollable-container1">
          {data.map((member, index) => (
            <div key={index} className="popup-card1">
              <img
              style={{height :"170px"}}
                src={member.image}
                alt={`${member.name}'s image`}
              />
              <div className="popup-text1">
                <div className="popup-heading1">{member.name}</div>
                <p className="popup-description1">{member.designation}</p>
                <p className="popup-description1">Mobile: {member.mobile}</p>
                <p className="popup-description1">Email: {member.email}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="popup-button1" onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default ScrollableMembers;


