import React from 'react';
import styled from 'styled-components';

const TopicsDetailPhotoItem = ({ item }) => {
  const a = 1;
  return (
    <Container>
      <img src={item.urls.regular} alt="" />
    </Container>
  );
};

const Container = styled.div`

`;

export default TopicsDetailPhotoItem;
