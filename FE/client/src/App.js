import React from 'react';
import './App.css';
import Header from './component/shared/Header/Header';
import MainRouter from './component/shared/MainRouter';

function App() {
  return (
    <div className="App">
      <p>this is App</p>
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
