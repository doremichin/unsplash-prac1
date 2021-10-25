import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/topics/slice';
import TopicsDetailHead from '../components/TopicsDetailHead';
import TopicsDetailPhotos from '../components/TopicsDetailPhotos';

const TopicsDetailContainer = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const topicDetail = useSelector((state) => state.topics.detail);
  const topicPhotos = useSelector((state) => state.topics.photos);

  useEffect(() => {
    dispatch(Action.Creators.getTopicById(slug));
    dispatch(Action.Creators.getTopicPhotos(slug));
  }, [slug]);

  return (
    <Container>
      <TopicsDetailHead data={topicDetail} />
      <TopicsDetailPhotos data={topicPhotos} />
    </Container>
  );
};

const Container = styled.div`

`;

export default TopicsDetailContainer;
