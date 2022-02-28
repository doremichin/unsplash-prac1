import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import PhotoItemInMobile from './PhotoItemInMobile';
import PhotoItemInDesktop from './PhotoItemInDesktop';

function PhotoItem({ item }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      {
        isMobile ? <PhotoItemInMobile item={item} /> : <PhotoItemInDesktop item={item} />
      }
    </Container>
  );
}

const Container = styled.div`

`;

export default PhotoItem;
