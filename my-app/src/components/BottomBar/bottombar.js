import React from 'react';
import UNLogo from '../../assets/un-logo.png';
import facebook from '../../assets/Facebook Logo.svg';
import X from '../../assets/Phosphor Icons Logo.svg'
import Youtube from '../../assets/YouTube Logo.svg'
import Insta from '../../assets/Instagram Logo.svg'


import './bottombar.css';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-left">
        <img src={UNLogo} alt="United Nations Logo" className="un-logo" />
        <span className="un-text">United Nations</span>
      </div>
      <div className="bottom-bar-right">
        <div className="social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={X} alt="X" />
            <img src={Youtube} alt="YouTube" />
            <img src={Insta} alt="Instagram" />  
        </div>
        <div className="vertical-divider"></div>
        <button className="donate-button">Donate</button>
      </div>
    </div>
  );
};

export default BottomBar;
