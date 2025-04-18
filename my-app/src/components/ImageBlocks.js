import React from 'react';
import './ImageBlocks.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function ImageBlocks() {
  return (
    <div className="image-blocks">
      <div className="block today-un">
        <h3>Today at the UN</h3>
      </div>
      <a className="block" href="#">
        <img src={image1} alt="News 1" />
        <h4>THE COMMITTEES: General Assembly’s Sixth Committee…</h4>
        <p>28 December 2018 | Global</p>
      </a>
      <a className="block" href="#">
        <img src={image2} alt="News 2" />
        <h4>Worth going ‘extra mile’ for a new Syrian constitution…</h4>
      </a>
      <a className="block" href="#">
        <img src={image3} alt="News 3" />
        <h4><span className="highlight">Humanitarian Aid</span> | DR Congo: Record numbers face acute…</h4>
      </a>
    </div>
  );
}

export default ImageBlocks;
