import React from 'react';
import styled from 'styled-components';

import MainPhotoList from '../../shared/components/List/MainPhotoList';
import PhotoItem from '../../shared/components/Item/PhotoItem';

const TopicsDetailPhotos = ({ data }) => {
  const renderItem = (item) => <PhotoItem item={item} />;

  return (
    <Container>
      <MainPhotoList data={data} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`

`;
export default TopicsDetailPhotos;
