import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const SearchLnbContainer = () => {
  const { category, query } = useParams();

  return (
    <Container>
      <Nav>
        <NavItem to={`/search/photos/${query}`}>photos</NavItem>
        <NavItem to={`/search/collections/${query}`}>collections</NavItem>
        <NavItem to={`/search/users/${query}`}>users</NavItem>
      </Nav>
      <Filter />
    </Container>
  );
};

const Container = styled.div`

`;
const Nav = styled.div`
  
`;
const NavItem = styled(Link)`
  margin: 0 10px;
`;
const Filter = styled.div`
  
`;

export default SearchLnbContainer;
