import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import TopicsDetailPhotos from '../components/TopicsDetailPhotos';
import { Action } from '../../../redux/topics/slice';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const TopicPhotosContainer = () => {
  const [page, setPage] = useState(1);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.topics);

  useEffect(() => {
    setPage(1);
  }, [slug]);
  useEffect(() => {
    if (page !== 1) {
      dispatch(Action.Creators.getNextTopicPhotos({ slug, page }));
    }
  }, [page]);

  const next = () => {
    if (photos.length) {
      setPage((p) => p + 1);
    }
  };

  return (
    <Container>
      <InfiniteScroll next={next}>
        <TopicsDetailPhotos data={photos} />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`

`;

export default TopicPhotosContainer;
