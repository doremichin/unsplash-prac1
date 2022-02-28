import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/photos/slice';
import Visual from '../components/Visual';
import { ACCESS_KEY } from '../../../const/config';
import { RootState } from '../../../redux/store';

function VisualContainer() {
  const { randomPhoto } = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();

  const getRandomPhoto = () => {
    dispatch(Action.Creators.getRandomPhoto({
      query: 'desktop wallpapers',
      client_id: ACCESS_KEY,
    }));
  };

  useEffect(() => {
    getRandomPhoto();
  }, []);
  return (
    <Container>
      <Visual data={randomPhoto} />
    </Container>
  );
}

const Container = styled.div`

`;

export default VisualContainer;
