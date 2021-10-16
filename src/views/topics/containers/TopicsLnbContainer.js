import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Action } from '../../../redux/topics/slice';

const TopicsLnbContainer = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.topics.list);

  useEffect(() => {
    dispatch(Action.Creators.getTopics({
      per_page: 30,
    }));
  }, []);
  return (
    <Container>
      <Nav>
        {
          list.map((item) => <NavItem key={item.id} to={`/topics/${item.slug}`}>{item.title}</NavItem>)
        }
      </Nav>
    </Container>
  );
};

const Container = styled.div`

`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  
`;
const NavItem = styled(Link)`
  white-space: nowrap;
  flex-shrink: 0;
  padding: 10px;
`;

export default TopicsLnbContainer;
