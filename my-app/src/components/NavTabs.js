import React from 'react';
import './NavTabs.css';

function NavTabs() {
  return (
    <div className="nav-tabs">
      <a href="https://www.un.org/en/about-us" target="_blank" rel="noopener noreferrer">About Us</a>
      <a href="https://www.un.org/en/our-work" target="_blank" rel="noopener noreferrer">Our Work</a>
      <a href="https://www.un.org/en/events-and-news" target="_blank" rel="noopener noreferrer">Events and News</a>
      <a href="https://www.un.org/en/get-involved" target="_blank" rel="noopener noreferrer">Get Involved</a>
    </div>
  );
}

export default NavTabs;
