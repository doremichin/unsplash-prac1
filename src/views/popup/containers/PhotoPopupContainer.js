import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import PhotoPopup from '../components/PhotoPopup';
import { Action } from '../../../redux/popup/slice';
import { ACCESS_KEY } from '../../../const/config';

const PhotoPopupContainer = () => {
  const { isView } = useSelector((state) => state.popup);
  const { detail } = useSelector((state) => state.popup);
  const { related } = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const { pathname } = window.location;
  // useLocation을 썼더니 주소가 안잡히네요
  // 그리고 pathname 이 /photos/didnv123ks 이렇게 잡혀서 통째로 api url에 넣어버렸는데 이게 맞는 방법인가요

  const handlePopup = () => {
    dispatch(Action.Creators.togglePopup(false));
    window.history.back();
  };
  const getPhotoById = () => {
    dispatch(Action.Creators.getPhotoById({
      pathname,
      client_id: ACCESS_KEY,
    }));
  };
  const getRelatedPhotosById = () => {
    dispatch(Action.Creators.getRelatedPhotoById({
      pathname,
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
  }, [isView, pathname]);
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
