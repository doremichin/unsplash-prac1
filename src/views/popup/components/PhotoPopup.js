import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import PhotoContents from '../../photo/components/PhotoContents';

const PhotoPopup = ({ id }) => {
  const related = useSelector((state) => state.photos.related);
  const detail = useSelector((state) => state.photos.detail);

  if (!detail[id] || !related[id]) return null;

  return (
    <Container>
      <PhotoContents related={related[id]} detail={detail[id]} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 100;
  margin: 15px auto 0;
  width: 85vw;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 4px;
`;

export default PhotoPopup;
