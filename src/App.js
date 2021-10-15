import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/Header/Header';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Routes />
  </Container>
);

const Container = styled.div`

`;

export default App;
