import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';

import { Action } from '../../../redux/topics/slice';

const TopicsLnbContainer = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.topics.list);
  const { slug } = useParams();

  useEffect(() => {
    dispatch(Action.Creators.getTopics({
      per_page: 30,
    }));
  }, []);
  return (
    <Container>
      <Nav>
        {
          list.map((item) => <NavItem key={item.id} to={`/topics/${item.slug}`} className={item.slug === slug && 'active'}>{item.title}</NavItem>)
        }
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 4px 5px #00000014;

`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  height: auto;
`;
const NavItem = styled(Link)`
  white-space: nowrap;
  flex-shrink: 0;
  padding: 10px 0;
  margin: 0 10px;
  &.active{
    border-bottom: 2px solid #111;
  }
`;

export default TopicsLnbContainer;
