import React from 'react';
import './UNLogoNav.css';
import logo from '../assets/un-logo.png';
import { Search } from 'lucide-react';

function UNLogoNav() {
  return (
    <div className="un-logo-nav">
      <div className="logo-left">
        <img src={logo} alt="UN Logo" className="un-logo" />
        <div className="logo-text">
          <div className="un-title">
            <div className="bold-line">United</div>
            <div className="bold-line">Nations</div>
          </div>
          <div className="divider" />
          <div className="subtitle">
            Peace, dignity and equality <br /> on a healthy planet
          </div>
        </div>
      </div>
      <div className="search-container">
        <div className="search-wrapper">
          <input type="text" placeholder="Search" className="search-input-box" />
          <button className="search-icon-box">
            <Search size={18} color="black" />
          </button>
        </div>
        <div className="site-index">A-Z Site Index</div>
      </div>
    </div>
  );
}

export default UNLogoNav;
