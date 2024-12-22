import React, { useState, useEffect } from 'react';
import logo from '../images/note.jpg';

function Email() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define styles based on the screen size
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#070B42FF', // Black background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'faded-outer 7s 1 linear', // Fading animation
    opacity: 1,
    zIndex: 1,
    justifyContent: 'spaceAround',
  };

  const anilrStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content within this div
    justifyContent: 'center', // Center content vertically
    width: '100%',
  };

  const logoStyle = {
    height: windowWidth > 1024 ? '60px' : windowWidth > 768 ? '50px' : '40px',
    width: windowWidth > 1024 ? '60px' : windowWidth > 768 ? '50px' : '40px',
    marginBottom: '20px',
  };

  const headerStyle = {
    fontSize: windowWidth > 1024 ? '24px' : windowWidth > 768 ? '20px' : '16px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: windowWidth > 1024 ? '16px' : windowWidth > 768 ? '14px' : '12px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the input and button
    width: '100%',
  };

  const inputStyle = {
    width: '100%', // Ensures the input box takes up full width of the container
    maxWidth: windowWidth > 768 ? '400px' : '300px', // Limits the maximum width for larger screens
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    boxSizing: 'border-box',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#2eafe6',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <div className='anilr' style={anilrStyle}>
        <img src={logo} alt='logo' style={logoStyle} />
        <h3 style={headerStyle}>Get Notified</h3>
        <p style={paragraphStyle}>
          Subscribe to our mailing list to know about upcoming events and publications.
        </p>
        <div style={inputContainerStyle}>
          <input type='email' placeholder='B24xxx@students.iitmandi.ac.in' style={inputStyle} />
          <a href='#' style={buttonStyle}>Subscribe</a><br/>
        </div>
      </div>
    </div>
  );
}

export default Email;

