import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Visual from '../components/Visual';
import { Action } from '../../../redux/main/slice';
import PhotoItem from '../../shared/components/Item/PhotoItem';
import { ContentContainer } from '../../shared/components/Layout/Layout.Styled';
import MainPhotoList from '../../shared/components/List/MainPhotoList';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.main);

  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      page: 1,
      per_page: 15,
      client_id: '6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
    }));
  };

  useEffect(() => {
    getPhotos();
  }, []);
  const renderItem = (item) => <PhotoItem item={item} />;
  return (
    <Container>
      <Visual />
      <ContentContainer>
        <MainPhotoList data={photos} renderItem={renderItem} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`

`;

export default MainContainer;
