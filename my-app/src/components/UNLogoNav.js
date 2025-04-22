import React from 'react';
import './UNLogoNav.css';
import logo from '../assets/un-logo.png';
import { Search } from 'lucide-react'; // Make sure `lucide-react` is installed

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
      <div className="search-icon">
        <Search color="black" size={20} />
      </div>
    </div>
  );
}

export default UNLogoNav;
