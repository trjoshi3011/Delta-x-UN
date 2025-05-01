import React from 'react';
import './UNPhoto.css';
import UNPhotoLinks from './UNPhotoLinks'; // <-- Add this line

function UNPhoto() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="unphoto-container">
        <div className="unphoto-title">
          <span>UN</span>
          <span>Photo</span>
        </div>
        <div className="unphoto-description">
          UN Photo captures the Organization’s work worldwide and at Headquarters. High-resolution images are available for download with registration.
        </div>
        <div className="unphoto-arrow" />
      </div>

      {/* ✅ Insert the links right below */}
      <UNPhotoLinks />
    </div>
  );
}

export default UNPhoto;
