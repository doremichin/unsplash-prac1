import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../shared/components/Layout/LayoutStyled';
import RelatedPhotosContainer from '../containers/RelatedPhotosContainer';
import RelatedCollectionsContainer from '../containers/RelatedCollectionsContainer';
import RelatedTagsContainer from '../containers/RelatedTagsContainer';
import PhotoDetail from './photoDetail/PhotoDetail';

function PhotoContents({ detail, related }) {
  if (!detail.id || !related) return null;
  return (
    <Container>
      <PhotoDetail detail={detail} />
      <ContentContainer>
        <RelatedPhotosContainer related={related} />
        <RelatedCollectionsContainer detail={detail} />
        <RelatedTagsContainer detail={detail} />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  position: relative;
  padding: 0 10px;
`;

export default PhotoContents;
