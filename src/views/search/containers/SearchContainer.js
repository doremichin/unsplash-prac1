import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/search/slice';
import { ContentContainer } from '../../shared/components/Layout/Layout.Styled';
import RelatedSearchesMenu from '../components/RelatedSearchesMenu';
import SearchCollections from '../components/SearchCollections';
import SearchUsers from '../components/SearchUsers';
import { ACCESS_KEY } from '../../../const/config';
import SearchPhotos from '../components/SearchPhotos';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const SearchContainer = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {
    photos, collections, users, related_searches,
  } = useSelector((state) => state.search);

  const searchPhotos = () => {
    dispatch(Action.Creators.searchPhotos({
      query,
      page: 1,
      per_page: 15,
      client_id: ACCESS_KEY,
    }));
  };

  const gatherSearchPhotos = () => {
    dispatch(Action.Creators.getNextSearchPhotos({
      query,
      page,
      per_page: 15,
      client_id: ACCESS_KEY,
    }));
  };

  useEffect(() => {
    if (page > 1) {
      gatherSearchPhotos();
    }
  }, [page]);

  useEffect(() => {
    searchPhotos();
    setPage(1);
  }, [query]);

  const next = () => {
    if (photos.results.length) {
      setPage((p) => p + 1);
    }
  };

  if (!photos) return '...loading';

  return (
    <Container>
      <ContentContainer>
        <PageTitle>{query}</PageTitle>

        <RelatedSearchesMenu data={related_searches} />
        <InfiniteScroll next={next}>
          <Route path={['/search/photos/:query']}>
            <SearchPhotos data={photos?.results} />
          </Route>

          <Route path={['/search/collections/:query']}>
            <SearchCollections data={collections?.results} />
          </Route>

          <Route path={['/search/users/:query']}>
            <SearchUsers data={users?.results} />
          </Route>
        </InfiniteScroll>

      </ContentContainer>

    </Container>
  );
};

const Container = styled.div`

`;
const PageTitle = styled.h1`
  font-size: 46px;
  font-weight: 900;
  text-transform: capitalize;
  margin-top: 60px;
`;

export default SearchContainer;
