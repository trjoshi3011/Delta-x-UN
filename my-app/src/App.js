import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <div>
      <div className="top-bar">
        <div className="left">
          <AiFillHome className="home-icon" />
          <span>Welcome to the United Nations</span>
        </div>
        <div className="right">
          <span>العربية</span>
          <span>中文</span>
          <span className="bold">English</span>
          <span>Français</span>
          <span>Русский</span>
          <span>Español</span>
        </div>
      </div>
      <div className="blue-bar"></div>
    </div>
  );
}

export default App;
