import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

import { Action } from '../../../redux/topics/slice';
import ScrollMenu from '../../shared/components/ScrollMenu';
import { ACCESS_KEY } from '../../../const/config';

const TopicsLnbContainer = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.topics.list);
  const { slug } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(Action.Creators.getTopics({
      per_page: 30,
      client_id: ACCESS_KEY,
    }));
  }, []);

  const renderItem = (item) => (<NavItem key={item.id} to={`/topics/${item.slug}`} className={item.slug === slug && 'active'}>{item.title}</NavItem>);
  return (
    <Container>
      <Nav>
        <NavItem to="/" className={cn({ active: pathname === '/' })}>Editorial</NavItem>
        <NavItem to="/">Following</NavItem>
      </Nav>
      <Line />
      <ScrollMenu data={list} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 4px 5px #00000014;
  display: flex;
`;
const Nav = styled.div`
  display: flex;
`;
const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 14px 0;
  margin: 0 10px;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 500;
  color: #767676;
  transition: 0.2s;
  border-bottom: 2px solid transparent;
  &.active{
    border-bottom: 2px solid #111;
    color: #111;
  }
  &:hover{
    color: #111;
  }
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &::before{
    content: '';
    width: 1px;
    height: 32px;
    margin: 0 10px;
    background: #d1d1d1;
  }
`;

export default TopicsLnbContainer;
