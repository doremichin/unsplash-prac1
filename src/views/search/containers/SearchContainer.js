import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/search/slice';
import { ContentContainer } from '../../shared/components/Layout/Layout.Styled';
import RelatedSearchesMenu from '../components/RelatedSearchesMenu';
import SearchPhotos from '../components/SearchPhotos';
import SearchCollections from '../components/SearchCollections';
import SearchUsers from '../components/SearchUsers';

const SearchContainer = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const {
    photos, collections, users, related_searches,
  } = useSelector((state) => state.search);

  const searchPhotos = () => {
    dispatch(Action.Creators.searchPhotos({
      page: 1,
      query,
      per_page: 30,
    }));
  };

  useEffect(() => {
    searchPhotos();
  }, [query]);

  if (!photos) return '...loading';

  return (
    <Container>
      <ContentContainer>
        <h1>{query}</h1>
        <RelatedSearchesMenu data={related_searches} />
        <Route path={['/search/photos/:query']}>
          <SearchPhotos data={photos?.results} />
        </Route>
        <Route path={['/search/collections/:query']}>
          <SearchCollections data={collections?.results} />
        </Route>
        <Route path={['/search/users/:query']}>
          <SearchUsers data={users?.results} />
        </Route>

      </ContentContainer>

    </Container>
  );
};

const Container = styled.div`

`;

export default SearchContainer;
