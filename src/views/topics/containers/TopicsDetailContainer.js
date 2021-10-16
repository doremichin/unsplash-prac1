import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/topics/slice';
import TopicsDetailHead from '../components/TopicsDetailHead';
import GridList from '../../shared/components/List/GridList';
import TopicsDetailPhotoItem from '../components/TopicsDetailPhotoItem';

const TopicsDetailContainer = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const topicDetail = useSelector((state) => state.topics.detail);

  useEffect(() => {
    dispatch(Action.Creators.getTopicById(slug));
  }, [slug]);

  const renderItem = (item) => <TopicsDetailPhotoItem item={item} />;
  return (
    <Container>
      <TopicsDetailHead data={topicDetail} />
      <GridList data={topicDetail.preview_photos} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`

`;

export default TopicsDetailContainer;
