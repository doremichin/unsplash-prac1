import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';
import Topics from './pages/Topics';
import TopicsDetail from './pages/TopicsDetail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/search/photos/:query" component={Search} />
    <Route exact path="/topics" component={Topics} />
    <Route exact path="/topics/:slug" component={TopicsDetail} />
  </Switch>
);

export default Routes;
