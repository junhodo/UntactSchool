import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './component/shared/Header/Header';
import Main from './component/group/Main/Main';

function App() {
  return (
    <div className="App">
      <p>this is App</p>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/group">
          {' '}
          <Main />{' '}
        </Route>
        <Route path="/my" />
      </Switch>
    </div>
  );
}

export default App;
