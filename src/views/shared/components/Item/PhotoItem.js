import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Action } from '../../../../redux/app/slice';

const PhotoItem = ({ item }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.app);
  const handlePopup = () => {
    dispatch(Action.Creators.togglePopup(!popup));
    history.push(`/photos/${item.id}`);
  };
  return (
    <Container onClick={handlePopup}>
      <img src={item.urls.regular} alt="" />
      <Cover />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;

`;
const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000050;
`;
export default PhotoItem;
