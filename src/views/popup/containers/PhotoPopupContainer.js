import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import PhotoPopup from '../components/PhotoPopup';
import { Action } from '../../../redux/popup/slice';
import { ACCESS_KEY } from '../../../const/config';

const PhotoPopupContainer = () => {
  const { isView } = useSelector((state) => state.popup);
  const { detail } = useSelector((state) => state.popup);
  const { related } = useSelector((state) => state.popup);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const handlePopup = () => {
    dispatch(Action.Creators.togglePopup(false));
    history.push('/');
  };
  const getPhotoById = () => {
    dispatch(Action.Creators.getPhotoById({
      id,
      client_id: ACCESS_KEY,
    }));
  };
  const getRelatedPhotosById = () => {
    dispatch(Action.Creators.getRelatedPhotoById({
      id,
      client_id: ACCESS_KEY,
    }));
  };
  useEffect(() => {
    if (isView) {
      getPhotoById();
      getRelatedPhotosById();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isView, id]);
  return (
    <Container isView={isView} onClick={handlePopup}>
      <PhotoPopup detail={detail} related={related.results} />
    </Container>
  );
};

const Container = styled.div`
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding-bottom: 100px;
  background-color: #00000070;
  ${(props) => props.isView && css`
    display: block;
    overflow: auto;
  `}
`;

export default PhotoPopupContainer;
