import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/photos/slice';
import PhotoItem from '../../shared/components/Item/PhotoItem';
import { ContentContainer } from '../../shared/components/Layout/Layout.Styled';
import MainPhotoList from '../../shared/components/List/MainPhotoList';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.photos);
  const [page, setPage] = useState(1);

  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      page,
      per_page: 15,
      client_id: '6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
    }));
  };
  useEffect(() => {
    getPhotos();
  }, [page]);
  const renderItem = (item) => <PhotoItem item={item} />;
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
