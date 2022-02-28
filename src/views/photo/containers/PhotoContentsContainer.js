import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PhotoContents from '../components/PhotoContents';
import { Action } from '../../../redux/photos/slice';

function PhotoContentsContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { related, detail } = useSelector((state) => ({
    related: state.photos.related,
    detail: state.photos.detail,
  }));

  useEffect(() => {
    dispatch(Action.Creators.getPhotoById(id));
    dispatch(Action.Creators.getRelatedPhotoById(id));
  }, [id]);

  if (!detail?.[id] || !related?.[id]) return null;
  return (
    <Container>
      <PhotoContents related={related[id]} detail={detail[id]} />
    </Container>
  );
}

const Container = styled.div`

`;

export default PhotoContentsContainer;
