import React from 'react';
import styled from 'styled-components';

import SearchContainer from '../views/search/containers/SearchContainer';
import SearchLnbContainer from '../views/search/containers/SearchLnb/SearchLnbContainer';

const Search = () => (
  <Container>
    <SearchLnbContainer />
    <SearchContainer />
  </Container>
);

const Container = styled.div`

`;

export default Search;
