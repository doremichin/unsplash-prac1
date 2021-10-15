import React from 'react';
import styled from 'styled-components';

const PhotoItem = ({ item }) => (
  <Container>
    <img src={item.urls.regular} alt="" />
  </Container>
);

const Container = styled.div`

`;

export default PhotoItem;
