import React from 'react';
import styled from 'styled-components';

import MainPhotoList from '../../shared/components/List/MainPhotoList';
import PhotoItem from '../../shared/components/Item/PhotoItem';
import MainPhotoListTwoColumn from '../../shared/components/List/MainPhotoListTwoColumn';
import MainPhotoListOneColumn from '../../shared/components/List/MainPhotoListOneColumn';
import { Desktop, Mobile, Tablet } from '../../shared/components/Layout/Layout.Styled';
import PhotoItemInMobile from '../../shared/components/Item/PhotoItemInMobile';

const TopicsDetailPhotos = ({ data }) => {
  const renderItem = (item) => <PhotoItem item={item} />;
  const renderItemInMobile = (item) => <PhotoItemInMobile item={item} />;

  return (
    <Container>
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
export default TopicsDetailPhotos;
