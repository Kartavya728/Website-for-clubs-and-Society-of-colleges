import React from "react";
import logo from '../images/scocial.jpg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <b>SCRI|IIT MANDI</b>
          <br />Follow us on
          <br />
          <img src={logo} alt='logo' className="footer-logo" />
        </div>
        <div className="footer-right">
          INFORMATION
          <br />Tel : +91 xxxxxxxxxxx
          <br />Email: scri@students.iitmandi.ac.in
        </div>
      </div>
      <pre className="footer-footer-text">
        &nbsp;&nbsp;&nbsp;&nbsp;@Copyright SCRI | IIT Mandi.
        <br />All Rights Reserved Designed and Developed by Subham Kumar Shaw
        <br />with Kartavya and Riddhi Hosted by Wing IIT Mandi
      </pre>
      <br /><br /><br /><br />
      <button onClick={() => {
        alert('This Site is Created by Kartavya Suryawanshi');
      }} className="footer-button">
        Creator
      </button>
    </footer>
  );
};

export default Footer;

