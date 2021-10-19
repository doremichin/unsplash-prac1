import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => (
  <Container>
    <Link to="/topics">Topics</Link>
  </Container>
);

const Container = styled.div`
  margin-left: 40px;
`;

export default Nav;
