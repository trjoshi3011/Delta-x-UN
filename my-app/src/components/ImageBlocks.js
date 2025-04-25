import React from 'react';
import './ImageBlocks.css';
import image1 from '../assets/image1.jpg';
import image8 from '../assets/image8.jpg';
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
            <div className="news-title">
              What the war couldn’t take
            </div>
          </a>

          <a className="block news-block" href="https://www.unwomen.org/en/articles/explainer/how-gender-inequality-and-climate-change-are-interconnected" target="_blank" rel="noopener noreferrer">
            <img src={image7} alt="News 2" />
            <div className="news-title">
              The interconnected crisis
            </div>
          </a>

          <a className="block news-block" href="https://www.wfp.org/stories/nourishing-syrias-future-how-wfp-rethinking-nutrition-generation-born-conflict" target="_blank" rel="noopener noreferrer">
            <img src={image4} alt="News 3" />
            <div className="news-title">
              Nourishing Syria’s future
            </div>
          </a>

          <a className="block news-block" href="https://www.unesco.org/en/articles/heat-resistant-super-corals-source-hope-future-coral-reefs" target="_blank" rel="noopener noreferrer">
            <img src={image1} alt="News 4" />
            <div className="news-title">
              Tatakoto coral defy heat
            </div>
          </a>

          <a className="block news-block" href="https://www.unfpa.org/news/between-siege-and-survival-unheard-struggles-mothers-west-bank" target="_blank" rel="noopener noreferrer">
            <img src={image8} alt="News 5" />
            <div className="news-title">
              Unheard struggles of West Bank mothers
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageBlocks;
