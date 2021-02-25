import React from 'react';
import Header from './component/Header';
import Notification from './component/Notification';
import Report from './component/Report';
import PersonInfo from './component/PersonInfo';
import GroupInfo from './component/GroupInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Notification />
        <Report />
        <PersonInfo />
        <GroupInfo />
      </div>
    </div>
  );
}

export default App;
