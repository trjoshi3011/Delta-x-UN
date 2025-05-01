// src/components/Broadcast/Broadcast.js
import React from 'react';
import './Broadcast.css';
import broadcastIcon from '../../assets/broad.png';

function Broadcast() {
  return (
    <div className="broadcast-box">
      <img src={broadcastIcon} alt="Broadcast icon" className="broadcast-img" />
      <div className="broadcast-text">
        <h2>Broadcast Feeds</h2>
        <p>Live broadcast quality feeds are available for broadcasters</p>
        <ul>
          <li><a href="#">UNTV News and Facilities</a></li>
          <li><a href="#">Unifeed packages for broadcasters</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Broadcast;
