import React from 'react';
import TopBar from './components/TopBar';
import UNLogoNav from './components/UNLogoNav';
import NavTabs from './components/NavTabs';
import EventsTitle from './components/EventsTitle';
import ImageBlocks from './components/ImageBlocks';
import LinkColumns from './components/LinkColumns';
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
    </div>
  );
}

export default App;
