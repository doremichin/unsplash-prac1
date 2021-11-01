import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/topics/slice';
import TopicsDetailHead from '../components/TopicsDetailHead';
import TopicPhotosContainer from './TopicPhotosContainer';

const TopicsDetailContainer = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const topicDetail = useSelector((state) => state.topics.detail);

  useEffect(() => {
    dispatch(Action.Creators.getTopicById(slug));
    dispatch(Action.Creators.getTopicPhotos({ slug, page: 1 }));
  }, [slug]);

  return (
    <Container>
      <TopicsDetailHead data={topicDetail} />
      <TopicPhotosContainer />
    </Container>
  );
};

const Container = styled.div`

`;

export default TopicsDetailContainer;
