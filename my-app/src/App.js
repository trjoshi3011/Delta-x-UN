import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <div>
      <div className="top-bar"> // create a component folder that has a separate css and js for each class
        <div className="left">
          <AiFillHome className="home-icon" />
          <span>Welcome to the United Nations</span>
        </div>
        <div className="right">
          <button>العربية</button>
          <button>中文</button>
          <button className="bold">English</button>
          <button>Français</button>
          <button>Русский</button>
          <button>Español</button>
        </div>
      </div>
      <div className="blue-bar"></div>
    </div>
  );
}

export default App;
