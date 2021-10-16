import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';
import TopicsDetail from './pages/TopicsDetail';
import Topics from './pages/Topics';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/search/photos/:query" component={Search} />
    <Route exact path="/topics" component={Topics} />
    <Route exact path="/topics/:slug" component={TopicsDetail} />
  </Switch>
);

const Container = styled.div`

`;

export default Routes;
