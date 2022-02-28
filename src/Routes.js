import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';
import TopicsDetail from './pages/TopicsDetail';
import Topics from './pages/Topics';
import Photo from './pages/Photo';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/photos/:id" component={Photo} />
      <Route exact path="/search/:category/:query" component={Search} />
      <Route exact path="/topics" component={Topics} />
      <Route exact path="/topics/:slug" component={TopicsDetail} />
      <Redirect path="*" to="/" />
    </Switch>
  );
}

export default Routes;
