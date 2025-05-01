import React from 'react';
import './UNPhotoImage.css';
import extraImage from '../../assets/UN-Photo.png';
// Change to your actual image name

function UNPhotoImage() {
  return (
    <div className="unphoto-image-container">
      <img src={extraImage} alt="UN Additional Visual" className="unphoto-extra-img" />
    </div>
  );
}

export default UNPhotoImage;
