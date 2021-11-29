import React from 'react';
import styled from 'styled-components';

import MainPhotoList from '../../shared/components/List/MainPhotoList';
import PhotoItemCombine from '../../shared/components/Item/PhotoItemCombine';

const TopicsDetailPhotos = ({ data }) => {
  const renderItem = (item) => <PhotoItemCombine item={item} />;

  return (
    <Container>
      <MainPhotoList data={data} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`

`;
export default TopicsDetailPhotos;
