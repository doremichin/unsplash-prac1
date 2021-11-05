import React from 'react';
import styled from 'styled-components';

import MainContainer from '../views/main/containers/MainContainer';
import VisualContainer from '../views/main/containers/VisualContainer';
import PhotoPopupContainer from '../views/popup/containers/PhotoPopupContainer';
import ModalPortal from '../lib/ModalPortal';

const Main = () => (
  <>
    <ModalPortal>
      <PhotoPopupContainer />
    </ModalPortal>
    <Container>
      <VisualContainer />
      <MainContainer />
    </Container>
  </>
);

const Container = styled.div`
  
`;

export default Main;
