import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import DetailedPhotoById from '../DetailedPhotoById';
import PhotoDetailHeadline from './PhotoDetailHeadline';
import PhotoDetailFeature from './PhotoDetailFeature';

const PhotoDetail = ({ detail }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Container className={cn({ isMobile })}>
      <PhotoDetailHeadline detail={detail} />

      <DetailedPhotoById imageUrl={detail?.urls?.regular} />

      <PhotoDetailFeature detail={detail} />
    </Container>
  );
};

const Container = styled.div`

`;

export default PhotoDetail;
