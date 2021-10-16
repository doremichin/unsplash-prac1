import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/topics/slice';

const TopicsDetailContainer = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const topicDetail = useSelector((state) => state.topics.detail);

  useEffect(() => {
    dispatch(Action.Creators.getTopicById(slug));
  }, [slug]);
  return (
    <Container>
      <h1>{slug}</h1>
      <p>{topicDetail.description}</p>
    </Container>
  );
};

const Container = styled.div`

`;

export default TopicsDetailContainer;
