import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/photos/slice';
import PhotoItem from '../../shared/components/Item/PhotoItem';
import {
  ContentContainer,
  Desktop,
  Mobile,
  Tablet,
} from '../../shared/components/Layout/Layout.Styled';
import MainPhotoList from '../../shared/components/List/MainPhotoList';
import InfiniteScroll from '../../shared/components/InfiniteScroll';
import { ACCESS_KEY } from '../../../const/config';
import MainPhotoListTwoColumn from '../../shared/components/List/MainPhotoListTwoColumn';
import MainPhotoListOneColumn from '../../shared/components/List/MainPhotoListOneColumn';
import PhotoItemInMobile from '../../shared/components/Item/PhotoItemInMobile';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.photos);
  const [page, setPage] = useState(1);
  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      page,
      per_page: 15,
      client_id: ACCESS_KEY,
    }));
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  const renderItem = (item) => <PhotoItem item={item} />;
  const renderItemInMobile = (item) => <PhotoItemInMobile item={item} />;

  const next = () => {
    if (list.length) {
      setPage((p) => p + 1);
    }
  };
  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll next={next}>
          <Desktop>
            <MainPhotoList data={list} renderItem={renderItem} />
          </Desktop>
          <Tablet>
            <MainPhotoListTwoColumn data={list} renderItem={renderItem} />
          </Tablet>
          <Mobile>
            <MainPhotoListOneColumn data={list} renderItem={renderItemInMobile} />
          </Mobile>
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  
`;

export default MainContainer;
