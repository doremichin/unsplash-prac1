import React from 'react';
import styled from 'styled-components';

import PhotoContentsContainer from '../views/photo/containers/PhotoContentsContainer';

function Photo() {
  return (
    <Container>
      <PhotoContentsContainer />
    </Container>
  );
}

const Container = styled.div`

`;

export default Photo;
