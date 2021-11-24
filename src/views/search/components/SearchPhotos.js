import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import MainPhotoList from '../../shared/components/List/MainPhotoList';
import PhotoItem from '../../shared/components/Item/PhotoItem';
import { Desktop, Mobile, Tablet } from '../../shared/components/Layout/Layout.Styled';
import MainPhotoListTwoColumn from '../../shared/components/List/MainPhotoListTwoColumn';
import MainPhotoListOneColumn from '../../shared/components/List/MainPhotoListOneColumn';
import PhotoItemInMobile from '../../shared/components/Item/PhotoItemInMobile';

const SearchPhotos = ({ data }) => {
  const { query } = useParams();

  const renderItem = (item) => <PhotoItem item={item} />;
  const renderItemInMobile = (item) => <PhotoItemInMobile item={item} />;

  if (!data) return '...loading';
  return (
    <Container>
      <PageDesc>Results for {query}</PageDesc>
      <Desktop>
        <MainPhotoList data={data} renderItem={renderItem} />
      </Desktop>
      <Tablet>
        <MainPhotoListTwoColumn data={data} renderItem={renderItem} />
      </Tablet>
      <Mobile>
        <MainPhotoListOneColumn data={data} renderItem={renderItemInMobile} />
      </Mobile>
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
