import React from 'react';
import styled from 'styled-components';

import MainContainer from '../views/main/containers/MainContainer';
import VisualContainer from '../views/main/containers/VisualContainer';

const Main = () => (
  <Container>
    <VisualContainer />
    <MainContainer />
  </Container>
);

const Container = styled.div`

`;

export default Main;
