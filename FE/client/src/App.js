import React from 'react';
import './App.css';
import Header from './component/shared/Header/Header';
import MainRouter from './component/shared/MainRouter';
import Sidebar from './component/shared/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <p>this is App</p>
      <Header />
      <Sidebar />
      <MainRouter />
    </div>
  );
}

export default App;
