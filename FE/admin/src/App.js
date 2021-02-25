import React from 'react';
// import Notification from './component/Notification';
// import Report from './component/Report';
// import PersonInfo from './component/PersonInfo';
// import GroupInfo from './component/GroupInfo';
import Header from './component/Header';
import Login from './component/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <div className="Content">
        {/* <Notification />
        <Report />
        <PersonInfo />
        <GroupInfo /> */}
      </div>
    </div>
  );
}

export default App;
