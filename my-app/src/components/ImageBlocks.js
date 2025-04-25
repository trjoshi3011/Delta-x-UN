import React from 'react';
import './ImageBlocks.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

function ImageBlocks() {
  return (
    <div className="image-blocks">
      <div className="block today-un">
        <h3>Today<br />at the UN</h3>
        <div className="arrow-line">→</div>
      </div>

      <a className="block news-block" href="https://www.un.org/en/news-1" target="_blank" rel="noopener noreferrer">
        <img src={image1} alt="News 1" />
      </a>

      <a className="block news-block" href="https://www.un.org/en/news-2" target="_blank" rel="noopener noreferrer">
        <img src={image2} alt="News 2" />
      </a>

      <a className="block news-block" href="https://www.un.org/en/news-3" target="_blank" rel="noopener noreferrer">
        <img src={image4} alt="News 3" />
      </a>
    </div>
  );
}

export default ImageBlocks;
