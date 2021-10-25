import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Action } from '../../../redux/topics/slice';
import ScrollMenu from '../../shared/components/ScrollMenu';

const TopicsLnbContainer = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.topics.list);
  const { slug } = useParams();

  useEffect(() => {
    dispatch(Action.Creators.getTopics({
      per_page: 30,
      client_id: '6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
    }));
  }, []);

  const renderItem = (item) => (<NavItem key={item.id} to={`/topics/${item.slug}`} className={item.slug === slug && 'active'}>{item.title}</NavItem>);
  return (
    <Container>
      <NavItem>editorial</NavItem>
      <NavItem>following</NavItem>
      <ScrollMenu data={list} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 4px 5px #00000014;
  display: flex;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  white-space: nowrap;
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 2px solid transparent;
  &.active{
    border-bottom: 2px solid #111;
  }
`;

export default TopicsLnbContainer;
