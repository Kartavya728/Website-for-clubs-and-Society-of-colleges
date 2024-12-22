import React from 'react';
import Boxes from './Boxes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemCard from './MemCard';

function Members({ data }) {
  return (
    <div className="outer-wrapper">
      <div className="s-box-alt">
        <div className="circle-alt"></div>
        <div className="circle-alt"></div>
        <div className="circle-alt"></div>

        <div id="members">
          <br /><br />
          <div className="anime">
            <div className="rgb-t1">Crew</div>
            <br /><br /><br /><br /><br /><br />
            <div className="membering">
              {/* First row with only 2 cards */}
              <div className="first-row">
                {data.slice(0, 2).map((member, index) => (
                  <div className="card-wrapper" key={index}>
                    <div className="designation">
                      {/* Display designation above the card */}
                      {member.designation}
                    </div>
                    <MemCard
                      image={member.image}
                      name={member.name}
                      designation={member.designation}
                      mobile={member.mobile}
                      email={member.email}
                    />
                  </div>
                ))}
              </div>
              <br />
              <div className='rgbtts'>CORE Members</div>
              <br />
              {/* Subsequent rows with a maximum of 7 cards for laptop, 5 for tablet, and 3 for mobile */}
              <div className="remaining-rows">
                {data.slice(2).map((member, index) => (
                  <MemCard
                    key={index + 2} // Adjust index to prevent duplicate keys
                    image={member.image}
                    name={member.name}
                    designation={member.designation}
                    mobile={member.mobile}
                    email={member.email}
                  />
                ))}
              </div>
            </div>
          </div>
          <br /><br /><br /><br />
        </div>
      </div>
    </div>
  );
}

export default Members;
