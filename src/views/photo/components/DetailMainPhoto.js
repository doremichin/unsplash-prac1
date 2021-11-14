import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const DetailMainPhoto = ({ imageUrl }) => {
  const [zoomIn, setZoomIn] = useState(false);

  return (
    <Container>
      <Inner>
        <Image className={cn({ zoomIn })}>
          <img src={imageUrl} alt="" />
          <ButtonZoom onClick={() => setZoomIn((p) => !p)}>
            {zoomIn ? '축소' : '확대'}
          </ButtonZoom>
        </Image>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 40px;
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.div`
  position: relative;
  height: 76vh;
  background-color: #eee;
  &.zoomIn {
    height: auto;
  }
  img{
    height: 100%;
    object-fit: cover;
  }
`;
const ButtonZoom = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  color: #000;
`;
export default DetailMainPhoto;
