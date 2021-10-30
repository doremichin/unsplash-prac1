import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/photos/slice';
import Visual from '../components/Visual';

const VisualContainer = () => {
  const { randomPhoto } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const getRandomPhoto = () => {
    dispatch(Action.Creators.getRandomPhoto({
      query: 'desktop wallpapers',
      client_id: '6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
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
};

const Container = styled.div`

`;

export default VisualContainer;
