import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import MainPhotoList from '../../shared/components/List/MainPhotoList';
import PhotoItemCombine from '../../shared/components/Item/PhotoItemCombine';

const SearchPhotos = ({ data }) => {
  const { query } = useParams();

  const renderItem = (item) => <PhotoItemCombine item={item} />;

  if (!data) return '...loading';
  return (
    <Container>
      <PageDesc>Results for {query}</PageDesc>
      <MainPhotoList data={data} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`

`;
const PageDesc = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export default SearchPhotos;
