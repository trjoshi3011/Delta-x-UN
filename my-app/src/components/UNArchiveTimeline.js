import React from 'react';
import './UNArchiveTimeline.css';
import { FaTwitter, FaFilm, FaFlask, FaMicrophoneAlt, FaLaptop } from 'react-icons/fa';

function UNArchiveTimeline() {
  const timelineData = [
    {
      icon: <FaTwitter />,
      title: '1920s – League of Nations',
      subtitle: 'Predecessor to the UN',
      description: 'Explore the foundation and mission of the League of Nations.',
      link: 'UN Archives »',
      url: 'https://archives.un.org/',
    },
    {
      icon: <FaFilm />,
      title: '1945 – Founding of the United Nations',
      subtitle: 'Audio & Video Collection Begins',
      description: 'Witness the birth of the UN through archived radio and video.',
      link: 'UN Audiovisual Library »',
      url: 'https://media.un.org/avlibrary/en',
    },
    {
      icon: <FaFlask />,
      title: '1950s–1970s – Post-War Global Impact',
      subtitle: 'Global Health & Aid',
      description: 'From penicillin distribution to field missions, see the UN’s early humanitarian impact.',
      link: 'Exhibitions Archive »',
      url: 'https://archives.un.org/content/exhibits-and-outreach',
    },
    {
      icon: <FaMicrophoneAlt />,
      title: '1989 – Audrey Hepburn & UNICEF',
      subtitle: 'Celebrity Advocacy',
      description: 'Audrey Hepburn shares moving stories from the frontlines of UNICEF’s mission.',
      link: 'UNICEF Audio Moments »',
      url: 'https://media.un.org/photo/en/asset/oun7/oun7666356',
    },
    {
      icon: <FaLaptop />,
      title: '2000s–Present – Digital Expansion',
      subtitle: 'Access UN Knowledge',
      description: 'Explore vast digital archives, maps, databases, and conference records.',
      link: 'UN Archives »',
      url: 'https://www.un.org/en/library/page/databases',
    },
  ];

  return (
    <div className="archive-container">
      <div className='timeline-title'>UN Archive Timeline</div>
      <div className="timeline-wrapper">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div
              className={`icon-column ${index === 0 ? 'first' : ''} ${
                index === timelineData.length - 1 ? 'last' : ''
              }`}
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="icon-link">
                <div className="icon-circle">
                  <div className="icon">{item.icon}</div>
                </div>
              </a>
            </div>
            <div className="text-column">
              <h4>{item.title}</h4>
              <p className="subtitle">{item.subtitle}</p>
              <p className="description">{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.link}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UNArchiveTimeline;
