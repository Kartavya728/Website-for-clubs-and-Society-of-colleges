import React, { useState } from 'react';
import './Albums.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';

function Albums() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleEventSelection = (eventNumber) => {
    setSelectedEvent(eventNumber);
    setShowDropdown(false);
  };

  // Images data
  const images = [
    { src: img1, event: 'Event 1' },
    { src: img2, event: 'Event 1' },
    { src: img3, event: 'Event 3' },
    { src: img4, event: 'Event 1' },
    { src: img5, event: 'Event 2' },
    { src: img6, event: 'Event 3' },
    { src: img7, event: 'Event 1' },
    { src: img8, event: 'Event 1' },
    { src: img9, event: 'Event 2' },
    { src: img10, event: 'Event 1' },
    { src: img11, event: 'Event 3' },
    { src: img12, event: 'Event 1' },
  ];

  // Filter images based on the selected event
  const filteredImages = selectedEvent
    ? images.filter((img) => img.event === selectedEvent)
    : images;

  // Create 4 columns by distributing the images
  const columns = [[], [], [], []];
  filteredImages.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  return (
    <div id="Albums">
      <div className="rgb-t1">Albums</div>
      <div className="btn-arng">
        <button className="cv" onClick={toggleDropdown}>
          Select Event
        </button>
        <div className={`dropdown ${showDropdown ? 'show' : 'hide'}`}>
          <button onClick={() => handleEventSelection('Event 1')}>Event 1</button>
          <button onClick={() => handleEventSelection('Event 2')}>Event 2</button>
          <button onClick={() => handleEventSelection('Event 3')}>Event 3</button>
          <button onClick={() => handleEventSelection(null)}>Show All</button>
        </div>
      </div>
      {/* Render columns */}
      <div className="row">
        {columns.map((column, colIndex) => (
          <div className="column" key={colIndex}>
            {column.map((img, index) => (
              <div className="img-hover-zoom" key={index}>
                <img src={img.src} alt={`Album ${colIndex + 1}-${index + 1}`} />
                <div className="hover-text">{img.event}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;


