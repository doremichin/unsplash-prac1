import React from 'react';
import styled from 'styled-components';

import MainContainer from '../views/main/containers/MainContainer';
import VisualContainer from '../views/main/containers/VisualContainer';

function Main() {
  return (
    <Container>
      <VisualContainer />
      <MainContainer />
    </Container>
  );
}

const Container = styled.div`
  
`;

export default Main;
