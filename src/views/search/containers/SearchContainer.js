import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/search/slice';
import GridList from '../../shared/components/List/GridList';
import PhotoItem from '../../shared/components/Item/PhotoItem';

const SearchContainer = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.search);

  const searchPhotos = () => {
    dispatch(Action.Creators.searchPhotos({
      page: 1,
      query,
    }));
  };

  useEffect(() => {
    searchPhotos();
  }, [query]);

  const renderItem = (item) => <PhotoItem item={item} />;
  return (
    <Container>
      검색결과
      {' '}
      {photos.total}
      개가 검색됨
      <GridList
        data={photos.results}
        renderItem={renderItem}
      />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchContainer;
