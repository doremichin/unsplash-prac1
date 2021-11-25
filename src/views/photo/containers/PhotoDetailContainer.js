import React from 'react';
import styled from 'styled-components';

import PhotoDetail from '../components/PhotoDetail';

const PhotoDetailContainer = ({ detail }) => (
  <Container>
    <PhotoDetail detail={detail} />
  </Container>
);

const Container = styled.div`

`;

export default PhotoDetailContainer;
