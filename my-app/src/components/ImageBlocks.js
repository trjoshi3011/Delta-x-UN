import React from 'react';
import './ImageBlocks.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image4 from '../assets/image4.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

function ImageBlocks() {
  return (
    <div className="image-blocks">
      <div className="block today-un">
        <h3>Today<br />at the UN</h3>
        <div className="arrow-line"></div>
      </div>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          <a className="block news-block" href="https://storyteller.iom.int/stories/what-war-couldnt-take-stories-courage-and-survival-sudans-displaced" target="_blank" rel="noopener noreferrer">
            <img src={image6} alt="News 1" />
          </a>
          <a className="block news-block" href="https://www.unwomen.org/en/articles/explainer/how-gender-inequality-and-climate-change-are-interconnected" target="_blank" rel="noopener noreferrer">
            <img src={image7} alt="News 2" />
          </a>
          <a className="block news-block" href="https://www.wfp.org/stories/nourishing-syrias-future-how-wfp-rethinking-nutrition-generation-born-conflict" target="_blank" rel="noopener noreferrer">
            <img src={image4} alt="News 3" />
          </a>

          <a className="block news-block" href="https://www.unesco.org/en/articles/heat-resistant-super-corals-source-hope-future-coral-reefs" target="_blank" rel="noopener noreferrer">
            <img src={image1} alt="News 4" />
          </a>

          <a className="block news-block" href="https://www.wipo.int/web/wipo-magazine/articles/tantrum-pending-how-one-father-took-his-pacifier-from-patent-to-market-and-weaned-his-daughter-off-her-dummy-72431" target="_blank" rel="noopener noreferrer">
            <img src={image2} alt="News 5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageBlocks;
