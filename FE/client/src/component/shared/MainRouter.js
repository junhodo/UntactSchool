import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../group/Main/Main';

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" />
        <Route path="/group">
          <Main />
        </Route>
        <Route path="/my" />
      </Switch>
    </div>
  );
};

export default MainRouter;
