import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import { Action } from '../../../redux/search/slice';
import { ContentContainer } from '../../shared/components/Layout/LayoutStyled';
import RelatedSearchesMenu from '../components/RelatedSearchesMenu';
import { ACCESS_KEY } from '../../../const/config';
import SearchPhotosContainer from './SearchPhotosContainer';
import SearchCollectionsContainer from './SearchCollectionsContainer';
import SearchUsersContainer from './SearchUsersContainer';
import { RootState } from '../../../redux/store';

function SearchContainer() {
  function getQueryString() {
    const { search } = useLocation();
    const queryString = qs.parse(search, { ignoreQueryPrefix: true });

    return queryString;
  }
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { query } = useParams<{query : string}>();
  const queryString = getQueryString();
  const dispatch = useDispatch();
  const {
    photos, collections, users, related_searches,
  } = useSelector((state : RootState) => state.search);

  const searchResults = () => {
    dispatch(Action.Creators.getSearchResults({
      query,
      page: 1,
      per_page: 15,
      client_id: ACCESS_KEY,
      orientation: queryString.orientation,
      color: queryString.color,
      order_by: queryString.order_by,
    }));
  };

  useEffect(() => {
    searchResults();
  }, [query, queryString.orientation, queryString.color, queryString.order_by]);

  if (!photos) return <div>...loading</div>;

  return (
    <Container>
      <ContentContainer className={cn({ isMobile })}>
        <PageTitle>{query}</PageTitle>
        {
          !isMobile && <RelatedSearchesMenu data={related_searches} />
        }
        <Route path={['/search/photos/:query']}>
          <SearchPhotosContainer
            data={photos?.results}
            shape={queryString.orientation}
            color={queryString.color}
          />
        </Route>

        <Route path={['/search/collections/:query']}>
          <SearchCollectionsContainer data={collections?.results} />
        </Route>

        <Route path={['/search/users/:query']}>
          <SearchUsersContainer data={users?.results} />
        </Route>

      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`

`;
const PageTitle = styled.h1`
  font-size: 46px;
  font-weight: 900;
  text-transform: capitalize;
  margin-top: 60px;
  margin-left: 10px;
  .isMobile &{
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

export default SearchContainer;
