import React from 'react';
import './LetsConnect.css'; // Import the external CSS file
import png1 from '../images/1733752223957.png'
import png2 from '../images/1733752223954.png'
import png3 from '../images/1733752223951.png'

const Connect = () => {
  return (
    <div className="lets-connect-container">
      <h1 className="lets-connect-heading">Let's Connect</h1>
      
      {/* Image Section */}
      <div className="images-section">
        <img src={png1} alt="Image 1" className="responsive-image" />
        <img src={png2} alt="Image 2" className="responsive-image" />
        <img src={png3} alt="Image 3" className="responsive-image" />
      </div>
      
      {/* Form Section */}
      <form className="connect-form">
        <input type="text" placeholder="Name" className="form-input" required />
        <input type="email" placeholder="Email" className="form-input" required />
        <input type="text" placeholder="Subject" className="form-input" required />
        <textarea placeholder="Message" className="form-textarea" rows="5" required></textarea>
        <button type="submit" className="connect-button">Connect Now</button>
      </form>

    </div>
  );
};

export default Connect;

