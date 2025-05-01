import React from 'react';
import './Calendar.css';
import calendarIcon from '../../assets/calendar-icon.png'; // use your uploaded image

function Calendar() {
  return (
    <div className="calendar-box">
      <img src={calendarIcon} alt="Calendar icon" className="calendar-img" />
      <div className="calendar-text">
        <h2>Calendars</h2>
        <p>Explore upcoming conferences, observances, and events</p>
        <ul>
          <li><a href="#">Conferences and meetings by date</a></li>
          <li><a href="#">Conferences and meetings by venue</a></li>
          <li><a href="#">International Observances</a></li>
          <li><a href="#">Civil Society Events</a></li>
          <li><a href="#">NYC UN-Bookshop events</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Calendar;
