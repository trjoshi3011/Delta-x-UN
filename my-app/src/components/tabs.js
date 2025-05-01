import React, { useState } from 'react';
import './tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('READ');

  const tabData = {
    READ: (
      <>
        <p>Daily news updates, features, photo essays, thematic focus pages, and interviews with UN officials and advocates who have lent their voice to UN causes.</p>
        <ul>
          <li><a href="https://news.un.org/en/?_gl=1*hgoz3m*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NTc3Ny4wLjAuMA..">UN News <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://www.un.org/en/chronicle">UN Chronicle <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://africarenewal.un.org/en">Africa Renewal <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://shop.un.org/?_gl=1*12exchs*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NTkyNS4wLjAuMA..">UN Publications for Sale <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://apps.apple.com/us/app/un-news/id496893005">News App on iOS <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://play.google.com/store/apps/details?id=org.un.mobile.news&hl=en&pli=1">News App on Android <span className='tab-arrow'>»</span></a></li>
        </ul>
      </>
    ),
    WATCH: (
      <>
        <p>In addition to live and on-demand video-clips of meetings, events, and conferences from <a href="https://webtv.un.org/en?_gl=1*163cr7d*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NDYwOC4wLjAuMA..">UN WebTV <span className='tab-arrow'>»</span></a>, there are features and stories on important global issues.</p>
        <ul>
            <li><a href="https://webtv.un.org/en?_gl=1*11lquc6*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NjY3Ny4wLjAuMA..">UN WebTV <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://www.youtube.com/channel/UC5O114-PQNYkurlTg6hekZw">UN YouTube Channel <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://www.un.org/en/video">UN Video <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://www.un.org/en/media/accreditation/transmission.shtml">UNTV Transmission Guide <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://media.un.org/unifeed/en?_gl=1*1nl0zl1*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTIwOTg3My43LjEuMTc0NTIwOTg4NC4wLjAuMA..">UNifeed <span className='tab-arrow'>»</span></a></li>
        </ul>
      </>
    ),
    LISTEN: (
      <>
        <p>UN audio programmes, news stories, and interviews with key UN officials. Our hit UN News podcast "UNComplicated" gives you a unique perspective on the work of the Organization and the views of UN experts on important subjects. Our award-winning "Awake at Night" podcast gives an intimate and personal peek into the lives of UN staff who are striving to make a difference around the globe.</p>
        <ul>
          <li><a href="https://news.un.org/en/audio-hub?_gl=1*17kehc5*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NjU5Mi4wLjAuMA..">UN Audio Hub <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://news.un.org/en/audio-product/podcast-uncomplicated?_gl=1*1im56ir*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NjYwMy4wLjAuMA..">UNComplicated <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://www.un.org/en/awake-at-night">Awake At Night <span className='tab-arrow'>»</span></a></li> 
          <li><p>Programmes in <a href="https://news.un.org/pt/audio-hub?_gl=1*1tsbvcb*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTIwOTg3My43LjEuMTc0NTIwOTkwMy4wLjAuMA..">Português</a>, <a herf="https://news.un.org/sw/audio-hub?_gl=1*1tsbvcb*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTIwOTg3My43LjEuMTc0NTIwOTkwMy4wLjAuMA..">Kiswahili</a>, <a href="https://news.un.org/hi/audio-hub?_gl=1*121upip*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTIwOTg3My43LjEuMTc0NTIwOTkwMy4wLjAuMA..">Hindi</a>, <a href="https://news.un.org/ur/audio-hub?_gl=1*121upip*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTIwOTg3My43LjEuMTc0NTIwOTkwMy4wLjAuMA..">Urdu</a>, and <a href="https://soundcloud.com/un-news-bangla">Bangla</a> <span className='tab-arrow'>»</span></p></li>
          <li><a href="https://media.un.org/avlibrary/en/series/un-radio-classics?_gl=1*h96cqb*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NjYyMy4wLjAuMA..">UN Radio Classics <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://apps.apple.com/us/app/un-audio-channels/id911809149">Audio App on iOS <span className='tab-arrow'>»</span></a></li>          
        </ul>
      </>
    ),
    ENGAGE: (
      <>
        <p>For media outlets and other content providers, we offer partnership opportunities. Everyone is also invited to engage with us via our various social media platforms.</p>
        <ul>
          <li><a href="mailto:mediapartnerships@un.org">Partnerships <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://www.un.org/en/get-involved/social-media">Social Media <span className='tab-arrow'>»</span></a></li>
          <li><a href="https://media.un.org/avlibrary/en/contact?_gl=1*1arg4ho*_ga*MTQzMDEyOTYwNS4xNzQwNDE2NzY2*_ga_TK9BQL5X7Z*MTc0NTE5NDYwMy42LjEuMTc0NTE5NjU3Mi4wLjAuMA..">Contact UN Multimedia <span className='tab-arrow'>»</span></a></li>

        </ul>
      </>
    )
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {['READ', 'WATCH', 'LISTEN', 'ENGAGE'].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabData[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
