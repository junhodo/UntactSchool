import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './router/LoginPage';
import MainPage from './router/MainPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={LoginPage} exact />
      <Route path="/admin" component={MainPage} />
    </div>
  );
}

export default App;
