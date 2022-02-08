import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import GridList from '../../shared/components/List/GridList';
import TopicItem from '../components/TopicItem';

const TopicsContainer = () => {
  const list = useSelector((state) => state.topics.list);

  const renderItem = (item) => <TopicItem item={item} />;
  return (
    <Container>
      <Title>
        <h1>Topics</h1>
        <p>
          Explore the world through topics of beautiful photos free to use under the
          <br />
          <a href="https://unsplash.com/license">Unsplash License</a>
          .
        </p>
      </Title>
      <SubTitle>All topics</SubTitle>
      <GridList data={list} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`

`;
const Title = styled.div`
  padding: 60px 10px;
  color: #111;
  h1{
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 15px;
  }
  p,a{
    font-size: 18px;
  }
  p{
    line-height: 1.3;
  }
  a{
    color: #767676;
    text-decoration: underline;
    transition: 0.3s;
    &:hover{
      color: #111;
    }
  }
`;
const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 900;
  padding: 10px;
  margin-bottom: 10px;
  
`;

export default TopicsContainer;
