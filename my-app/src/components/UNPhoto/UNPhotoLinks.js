import React from 'react';
import './UNPhotoLinks.css';

function UNPhotoLinks() {
  return (
    <div className="unphoto-links-container">
      <a
        className="unphoto-link"
        href="https://dam.media.un.org/?_gl=1*5x9fm5*_ga*MjU0NzA1OTA2LjE3NDI1MzI3Njc.*_ga_TK9BQL5X7Z*MTc0NTg4NjYxNC4zNi4xLjE3NDU4ODc0ODguMC4wLjA.*_ga_SCSJZ3XC0L*MTc0NTg4NjYxNC4xLjEuMTc0NTg4NzQ4OC4wLjAuMA.."
        target="_blank"
        rel="noopener noreferrer"
      >
        UN Photo
      </a>

      <a
        className="unphoto-link"
        href="https://www.flickr.com/photos/un_photo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        UN Flickr
      </a>
    </div>
  );
}

export default UNPhotoLinks;
