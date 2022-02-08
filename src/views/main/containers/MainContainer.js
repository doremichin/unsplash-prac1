import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/photos/slice';
import {
  ContentContainer,
} from '../../shared/components/Layout/Layout.Styled';
import MainPhotoList from '../../shared/components/List/MainPhotoList';
import InfiniteScroll from '../../shared/components/InfiniteScroll';
import { ACCESS_KEY } from '../../../const/config';
import PhotoItemCombine from '../../shared/components/Item/PhotoItemCombine';

const MainContainer = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.photos.list);
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

  const renderItem = (item) => <PhotoItemCombine item={item} />;

  const next = () => {
    if (list.length) {
      setPage((p) => p + 1);
    }
  };
  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll next={next}>
          <MainPhotoList data={list} renderItem={renderItem} />
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  
`;

export default MainContainer;
