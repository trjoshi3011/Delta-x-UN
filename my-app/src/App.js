import React from 'react';
import TopBar from './components/TopBar';
import UNLogoNav from './components/UNLogoNav';
import NavTabs from './components/NavTabs';
import EventsTitle from './components/EventsTitle';
import ImageBlocks from './components/ImageBlocks';
import LinkColumns from './components/LinkColumns';
import UNArchiveTimeline from './components/UNArchiveTimeline';
import Tabs from './components/tabs';
import UNPhoto from './components/UNPhoto/UNPhoto';
import Calendar from './components/Calendar/Calendar';
import Broadcast from './components/Broadcast/Broadcast';

import './App.css';

function App() {
  return (
    <div>
      <TopBar />
      <UNLogoNav />
      <NavTabs />
      <EventsTitle />
      <ImageBlocks />
      <LinkColumns />

      <hr className="section-divider" />
      
      
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
  <UNArchiveTimeline />
  <div className="un-column-wrapper">
    <UNPhoto />
    <div className="row">
      <Broadcast />
      <Calendar />
    </div>
  </div>
</div>



      <footer class="footer">
      <Tabs />
    </footer>

    </div>
  );
}

export default App;
