import React from 'react';
import './UNLogoNav.css';
import logo from '../assets/un-logo.png';

function UNLogoNav() {
  return (
    <div className="un-logo-nav">
      <div className="logo-left">
        <a href="/en" className="logo-link">
          <img src={logo} alt="UN Logo" className="un-logo" />
        </a>
        <div className="logo-text">
          <div className="logo-bold">United Nations</div>
          <div className="grey-bar"></div>
          <div className="logo-subtitle">Peace, dignity and equality on a healthy planet</div>
        </div>
      </div>
      <div className="search-icon">🔍</div>
    </div>
  );
}

export default UNLogoNav;