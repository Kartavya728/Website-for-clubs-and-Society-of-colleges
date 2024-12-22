import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/iittrans.png';
import NotificationBar from './NotificationBar';

function NavBar({ notifications }) {
  const [showNotification, setShowNotification] = useState(false);
  const [closing, setClosing] = useState(false); // For exit animation

  const toggleNotification = () => {
    if (showNotification) {
      setClosing(true); // Trigger closing animation
      setTimeout(() => {
        setShowNotification(false);
        setClosing(false);
      }, 500); // Match animation duration
    } else {
      setShowNotification(true);
    }
  };

  return (
    <div className='nana'>
      <nav>
        <Link to="main" className="logo" smooth={true} duration={1000}>
          <img src={logo} alt="logo" style={{maxHeight:'50px'}}/>
        </Link>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="reanimate" className="nav-link" activeClass="active" spy={true} smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="nav-link" activeClass="active" spy={true} smooth={true} duration={1000}>
              About us
            </Link>
          </li>
          <li>
            <Link to="vision" className="nav-link" activeClass="active" spy={true} smooth={true} duration={1000}>
              Ambitions
            </Link>
          </li>
          <li>
            <Link to="Meetups" className="nav-link" activeClass="active" spy={true} smooth={true} duration={1000}>
              Events
            </Link>
          </li>
          <li>
            <Link to="members" className="nav-link" activeClass="active" spy={true} smooth={true} duration={1000}>
              Members
            </Link>
          </li>
          <li>
            <button onClick={toggleNotification} className="nav-link" activeClass="active" spy={true} smooth={true} duration={1000}>
              Notification
              
            </button>
          </li>
          <li>
            <Link to="Albums" className="nav-link" activeClass="active" spy={true} smooth={true} duration={1000}>
              Gallery
            </Link>
          </li>
        </ul>
      </nav>

      {showNotification && (
        <div className={`notification-panel ${closing ? 'hide' : 'show'}`}>
          <NotificationBar notifications={notifications} /><br/>
          <button onClick={toggleNotification} className="cv-btn28">
        close
      </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;



