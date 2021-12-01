import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

import ColorFilterContent from './ColorFilterContent';

const ColorFilter = ({ colorToggle }) => {
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <Container>
      <ColorName>
        {
          queryString.color && queryString.color !== 'black_and_white'
          && <ColorTag className={queryString.color} />
        }
        {queryString.color || 'Any color'}
        <span className="icon">
          <AiFillCaretDown />
        </span>
      </ColorName>
      <ColorMenu className={cn({ colorToggle })}>
        <ColorFilterContent />
      </ColorMenu>
    </Container>
  );
};

const Container = styled.div`


`;
const ColorMenu = styled.div`
  position: absolute;
  z-index: 100;
  top: 30px;
  right: 0;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-size: 14px;
  color: #767676;
  display: none;
  &.colorToggle{
    display: block;
  }
`;
const ColorTag = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #f5f5f5;
  margin-right: 5px;
  &.white {
    background-color: #fff;
  }
  &.black {
    background: #4d4d4d;
  }
  &.yellow {
    background: #fcdc00;
  }
  &.orange {
    background: #fe9200;
  }
  &.red {
    background: #f44e3b;
  }
  &.purple {
    background: #7b64ff;
  }
  &.magenta {
    background: #ab149e;
  }
  &.green {
    background: #a4dd00;
  }
  &.teal {
    background: #68ccca;
  }
  &.blue {
    background: #009ce0;
  }
`;
const ColorName = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: #767676;
  fill: #767676;
  transition: 0.3s;
  &:hover{
    fill: #111;
    color: #111;
  }
  .icon{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`;

export default ColorFilter;
