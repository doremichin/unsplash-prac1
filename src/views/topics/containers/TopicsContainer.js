import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/topics/slice';
import GridList from '../../shared/components/List/GridList';
import TopicItem from '../components/TopicItem';

const TopicsContainer = () => {
  const list = useSelector((state) => state.topics.list);

  const renderItem = (item) => <TopicItem item={item} />;
  return (
    <Container>
      <GridList data={list} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`

`;

export default TopicsContainer;
