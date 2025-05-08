import React, { useState } from 'react';
import './UNPhotoImage.css';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';

const images = [img1, img2, img3, img4, img5];

function UNPhotoImage() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <img src={images[index]} alt={`Slide ${index + 1}`} className="slider-image" />
      <button className="slider-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default UNPhotoImage;

