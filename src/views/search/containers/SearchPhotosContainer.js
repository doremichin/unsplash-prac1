import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import SearchPhotos from '../components/SearchPhotos';
import InfiniteScroll from '../../shared/components/InfiniteScroll';
import { Action } from '../../../redux/search/slice';
import { ACCESS_KEY } from '../../../const/config';

const SearchPhotosContainer = ({ data }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { query } = useParams();

  const nextPhotos = () => {
    dispatch(Action.Creators.getNextPhotos({
      query,
      page,
      per_page: 15,
      client_id: ACCESS_KEY,
    }));
  };

  useEffect(() => {
    nextPhotos();
  }, [page]);
  useEffect(() => {
    setPage(1);
  }, [query]);

  const next = () => {
    setPage((p) => p + 1);
  };
  return (
    <Container>
      {
        data.length > 0
        && (
          <InfiniteScroll next={next}>
            <SearchPhotos data={data} />
          </InfiniteScroll>
        )
      }
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchPhotosContainer;
