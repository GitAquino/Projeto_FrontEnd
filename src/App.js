import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      <Content activeTab={activeTab} />
    </div>
  );
}

export default App;
