import React from 'react';
import styled from 'styled-components';

import PhotoDetailContainer from '../containers/PhotoDetailContainer';
import { ContentContainer } from '../../shared/components/Layout/Layout.Styled';
import RelatedPhotosContainer from '../containers/RelatedPhotosContainer';
import RelatedCollectionsContainer from '../containers/RelatedCollectionsContainer';
import RelatedTagsContainer from '../containers/RelatedTagsContainer';

const PhotoContents = ({ detail, related }) => {
  if (!detail.id || !related) return null;
  return (
    <Container>
      <PhotoDetailContainer detail={detail} />
      <ContentContainer>
        <RelatedPhotosContainer related={related} />
        <RelatedCollectionsContainer detail={detail} />
        <RelatedTagsContainer detail={detail} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
background: #fff;
  position: relative;
`;

export default PhotoContents;
