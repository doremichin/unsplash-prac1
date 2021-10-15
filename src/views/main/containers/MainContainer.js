import React, { useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Visual from '../components/Visual';
import { Action } from '../../../redux/main/slice';
import GridList from '../../shared/components/List/GridList';
import PhotoItem from '../../shared/components/Item/PhotoItem';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.main);

  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      page: 1,
      per_page: 15,
    }));
  };

  useEffect(() => {
    getPhotos();
  }, []);
  const renderItem = (item) => <PhotoItem item={item} />;
  return (
    <Container>
      <Visual />
      <GridList data={photos} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`

`;

export default MainContainer;
