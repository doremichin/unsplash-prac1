import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';

import { IconChevronLeft, IconChevronRight } from '../../../../icons';

const ScrollMenu = ({ data = [], renderItem }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const trackRef = useRef(null);

  const handleScroll = (e) => {
    const { scrollLeft, clientWidth, scrollWidth } = e.target;
    setMaxScroll(scrollWidth - clientWidth);
    setScrollLeft(scrollLeft);
  };
  const handleClickLeft = () => {
    trackRef.current.scrollLeft -= 300;
  };
  const handleClickRight = () => {
    trackRef.current.scrollLeft += 300;
  };

  const start = scrollLeft === 0;
  const end = scrollLeft === maxScroll;

  return (
    <Container className={cn({ start, end })}>
      {
        !start
        && (
          <Arrow left onClick={handleClickLeft}>
            <IconChevronLeft />
          </Arrow>
        )
      }
      <Track onScroll={handleScroll} ref={trackRef}>
        <Nav>
          {
            data.map((item) => renderItem(item))
          }
        </Nav>
      </Track>
      {
        !end
        && (
          <Arrow right onClick={handleClickRight}>
            <IconChevronRight />
          </Arrow>
        )
      }

    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 200px;
    pointer-events: none; //마우스 포인트 관련한 이벤트 삭제
  }

  &::before {
    background: linear-gradient(270deg, #fff0 0, #fff 90%, #fff);
    left: 0;
  }

  &::after {
    content: '';
    background: linear-gradient(90deg, #fff0 0, #fff 90%, #fff);
    right: 0;
  }
  
  &.start::before{
    opacity: 0;
  }
  &.end::after{
    opacity: 0;
  }
`;

const Track = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Nav = styled.div`
  display: flex;

`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ left }) => left && css`
    left: 0;
  `}
  ${({ right }) => right && css`
    right: 0;
  `}
`;
export default ScrollMenu;
