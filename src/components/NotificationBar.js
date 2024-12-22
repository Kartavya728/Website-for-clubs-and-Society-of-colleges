import React, { useState } from 'react';
import './NotificationBar.css'; 

const NotificationBar = ({ notifications }) => {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [closing, setClosing] = useState(false); // For exit animation

  const toggleModal = () => {
    if (showAll) {
      setClosing(true); // Trigger closing animation
      setTimeout(() => {
        setShowAll(false);
        setClosing(false);
      }, 500); // Match animation duration
    } else {
      setShowAll(true);
    }
  };

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderNotification = (notification, index) => (
    <div key={index} className="notification-box">
      <p className="notification-text">
        {expanded[index]
          ? notification.text
          : `${notification.text.slice(0, 50)}...`}
      </p>
      <div className="button-container">
        <button
          onClick={() => toggleExpanded(index)}
          className="show-more-btn"
        >
          {expanded[index] ? 'Show Less' : 'Show More'}
        </button>
        {notification.pdf && (
          <a href={notification.pdf} download className="download-btn">
            Download PDF
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div id='notification' className="notification-container">
      {notifications.slice(0, 3).map(renderNotification)}

      {notifications.length > 3 && (
        <button onClick={toggleModal} className="show-more-link">
          Show More
        </button>
      
      )}


      {showAll && (
        <div className={`modal ${closing ? 'modal-exit' : ''}`}>
          <div className="modal-content">
            <h2 className="modal-header">All Notifications</h2>
            {notifications.map(renderNotification)}
            <button onClick={toggleModal} className="close-btn">
              Close
            </button>
          </div><br/><br/><br/><br/><br/><br/><br/>
        </div>
      )}
      
    </div>
  );
};

export default NotificationBar;
