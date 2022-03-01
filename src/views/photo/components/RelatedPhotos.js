import React from 'react';
import styled from 'styled-components';

import MainPhotoList from '../../shared/components/List/MainPhotoList';
import PhotoItem from '../../shared/components/Item/PhotoItemInDesktop';

function RelatedPhotos({ data }) {
  const renderItem = (item) => <PhotoItem item={item} />;
  return (
    <Container>
      <h4>Related photos</h4>
      <MainPhotoList data={data} renderItem={renderItem} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  h4{
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default RelatedPhotos;
