import "./Floatbar.css";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const Favbar = () => {
  const [styles, setStyles] = useState({
    backgroundColor: "#3c3c3c",
    textColor: "#ffffff",
  });
  
  const [activeLink, setActiveLink] = useState("hht"); // Track active link
  const [isHidden, setIsHidden] = useState(false); // To track visibility of the navbar
  
  useEffect(() => {
    const sectionColors = {
      hht: { backgroundColor: "#1E1E1E00", textColor: "#FFFFFF00" },
      about: { backgroundColor: "#FFFDF5FF", textColor: "#000000FF" },
      vision: { backgroundColor: "#000000", textColor: "#f5f5dc" },
      Meetups: { backgroundColor: "#43C7FFD2", textColor: "#000000FF" },
      notification: { backgroundColor: "#f5f5dc", textColor: "#3c3c3c" },
      members: { backgroundColor: "#3c3c3c", textColor: "#ffffff" },
    };

    const handleScroll = () => {
      let currentStyles = { backgroundColor: "#3c3c3c", textColor: "#ffffff" }; 
      let shouldHideNavbar = false;

      Object.entries(sectionColors).forEach(([id, style]) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (
            sectionTop <= window.innerHeight / 2 &&
            sectionTop > -window.innerHeight / 2
          ) {
            currentStyles = style;
            setActiveLink(id); // Update active link based on scroll position
            if (id === "hht") {
              shouldHideNavbar = true; // Set flag to hide navbar on "hht" section
            }
          }
        }
      });

      setStyles(currentStyles);
      setIsHidden(shouldHideNavbar); // Update visibility state
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="navbar"
      style={{
        opacity: isHidden ? "0" : "1", // Fade out when hidden
        visibility: isHidden ? "hidden" : "visible", // Hide when not visible
        transition: "opacity 0.5s ease, visibility 0s linear 2s", // Smooth fade with delayed visibility change
      }}
    >
      <fav
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.textColor,
          transition: "background-color 0.5s ease, color 2s ease", // Smooth transitions
        }}
      >
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              to="hht"
              className={activeLink === "hht" ? "active" : ""}
              smooth={true}
              duration={1000}
              style={{ color: styles.textColor }}
              onClick={() => setActiveLink("hht")} // Set active link on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className={activeLink === "about" ? "active" : ""}
              smooth={true}
              duration={1000}
              style={{ color: styles.textColor }}
              onClick={() => setActiveLink("about")}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="vision"
              className={activeLink === "vision" ? "active" : ""}
              smooth={true}
              duration={1000}
              style={{ color: styles.textColor }}
              onClick={() => setActiveLink("vision")}
            >
              visions
            </Link>
          </li>
          <li>
            <Link
              to="Meetups"
              className={activeLink === "Meetups" ? "active" : ""}
              smooth={true}
              duration={1000}
              style={{ color: styles.textColor }}
              onClick={() => setActiveLink("Meetups")}
            >
              Events
            </Link>
          </li>
          
          <li>
            <Link
              to="members"
              className={activeLink === "members" ? "active" : ""}
              smooth={true}
              duration={1000}
              style={{ color: styles.textColor }}
              onClick={() => setActiveLink("members")}
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              to="notification"
              className={activeLink === "notification" ? "active" : ""}
              smooth={true}
              duration={1000}
              style={{ color: styles.textColor }}
              onClick={() => setActiveLink("notification")}
            >
              Notifications
            </Link>
          </li>
        </ul>
      </fav>
    </div>
  );
};

export default Favbar;
