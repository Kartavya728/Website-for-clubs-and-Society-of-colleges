import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from './Box';

function Events({ onButtonClick, events }) {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default value for laptops

  // Function to update slidesToShow based on window size
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width <= 600) {
      setSlidesToShow(1); // Mobile view
    } else if (width <= 1024) {
      setSlidesToShow(2); // Tablet view
    } else {
      setSlidesToShow(3); // Laptop view
    }
  };

  // Use effect to set up the event listener
  useEffect(() => {
    updateSlidesToShow(); // Set the initial value
    window.addEventListener('resize', updateSlidesToShow); // Update on resize

    return () => {
      window.removeEventListener('resize', updateSlidesToShow); // Cleanup listener
    };
  }, []);
// Custom Next Arrow
// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "110%",
        right: "20px", // Adjust this value for spacing
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        transition: "background 0.3s, transform 0.3s",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.3)")}
    >
      <span style={{ fontSize: "20px", color: "white" }}> {'>'} <br/></span>
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "110%",
        right: "70px", // Adjust this value to increase or decrease the space
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        transition: "background 0.3s, transform 0.3s",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.3)")}
    >
      <span style={{ fontSize: "20px", color: "white" }}> {'<'} <br/></span>
    </div>
  );
};


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow, // Dynamic value based on screen size
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px', // Removes padding on both sides
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider       {...settings}
    style={{
      position: 'relative',
      display: 'flex',
      justifyContent: slidesToShow === 1 ? 'center' : 'flex-start', // Center if one card is displayed
      alignItems: slidesToShow === 1 ? 'center' : 'flex-start', // Align cards at center when one is shown
      padding: slidesToShow === 1 ? '20px' : '0px', // Add padding to center the card when one is displayed
    }}>
      {events.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>No events available</div>
      ) : (
        events.map((event, index) => (
          <div key={index} style={{ padding: '5px',justifyContent:'space-around' }}>
            <Box
              Heading={event.heading}
              image={event.image}
              altText={event.altText}
              Delay={event.delay}
              onButtonClick={() =>
                onButtonClick(event.content, event.image, event.heading)
              }
              content={event.content}
              txt={event.txt}
            />
          </div>
        ))
      )}
    </Slider>
  );
}

export default Events;

