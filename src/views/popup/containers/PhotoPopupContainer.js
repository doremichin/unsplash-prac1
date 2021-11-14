import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import PhotoPopup from '../components/PhotoPopup';
import { Action } from '../../../redux/popup/slice';

const PhotoPopupContainer = () => {
  const { isView } = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = window.location;
  const id = pathname.split('/').pop();

  const closePopup = () => {
    dispatch(Action.Creators.togglePopup(false));
    window.history.pushState({}, null, location.pathname);
  };

  useEffect(() => {
    if (isView) {
      dispatch(Action.Creators.updatePopup(id));
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isView, pathname]);

  if (!isView) return null;

  return (
    <Container isView={isView}>
      <Screen onClick={closePopup} />
      <PhotoPopup id={id} />
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

  ${(props) => props.isView && css`
    display: block;
    overflow: auto;
  `}
`;
const Screen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #00000070;
`;
export default PhotoPopupContainer;
