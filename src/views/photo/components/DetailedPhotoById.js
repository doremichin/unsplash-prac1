import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { IconZoomIn } from '../../../icons';

function DetailedPhotoById({ imageUrl }) {
  const [zoomIn, setZoomIn] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      <Inner>
        {
          isMobile
            ? (
              <Image>
                <img src={imageUrl} alt="" />
              </Image>
            )
            : (
              <Image className={cn({ zoomIn })} onClick={() => setZoomIn((p) => !p)}>
                <img src={imageUrl} alt="" />
                <ButtonZoom className="buttonZoom">
                  <IconZoomIn />
                </ButtonZoom>
              </Image>
            )
        }
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 40px;
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
  .isMobile &{
    display: block;
  }
`;
const Image = styled.div`
  cursor: zoom-in;
  position: relative;
  height: 45vw;
  background-color: #eee;
  &.zoomIn {
    height: auto;
  }
  img{
    height: 100%;
    object-fit: cover;
  }
  .buttonZoom{
    opacity: 0;
    transition: 0.3s;
  }
  &:hover{
    .buttonZoom{
      opacity: 1;
    }
  }
  .isMobile &{
    cursor: default;
    height: auto;
    img{
      width: 100%;
    }
  }
`;
const ButtonZoom = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  color: #000;
  fill: #ffffff;
`;
export default DetailedPhotoById;
