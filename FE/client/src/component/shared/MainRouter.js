import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../group/Main/Main';
import MyPage from '../my/MyPage/MyPage';
import '../../css/Main.css';

const MainRouter = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" />
        <Route path="/group">
          <Main />
        </Route>
        <Route path="/my">
          <MyPage />
        </Route>
      </Switch>
    </div>
  );
};

export default MainRouter;
