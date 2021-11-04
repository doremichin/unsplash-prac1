import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import PhotoPopupItem from '../components/Popup/PhotoPopupItem';
import { Action } from '../../../redux/app/slice';
import { ACCESS_KEY } from '../../../const/config';

const PhotoPopupContainer = () => {
  const { popup } = useSelector((state) => state.app);
  const { detail } = useSelector((state) => state.app);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const handlePopup = () => {
    dispatch(Action.Creators.togglePopup(!popup));
    history.push('/');
  };
  useEffect(() => {
    if (popup) {
      dispatch(Action.Creators.getPhotoById({
        id,
        client_id: ACCESS_KEY,
      }));
    }
  }, [popup]);
  return (
    <Container popup={popup} onClick={handlePopup}>
      <PhotoPopupItem data={detail} />
    </Container>
  );
};

const Container = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  background-color: #00000070;
  ${(props) => props.popup && css`
    display: block;
  `}
`;

export default PhotoPopupContainer;
