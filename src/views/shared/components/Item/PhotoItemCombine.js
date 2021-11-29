import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import PhotoItemInMobile from './PhotoItemInMobile';
import PhotoItem from './PhotoItem';

const PhotoItemCombine = ({ item }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      {
            isMobile ? <PhotoItemInMobile item={item} /> : <PhotoItem item={item} />
          }
    </Container>
  );
};

const Container = styled.div`

`;

export default PhotoItemCombine;
