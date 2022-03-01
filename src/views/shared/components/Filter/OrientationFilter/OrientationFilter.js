import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

import OrientationFilterContent from './OrientationFilterContent';

function OrientationFilter({ orientationToggle }) {
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <Container>
      <OrientationName>
        { queryString.orientation || 'Any orientation'}
        <span className="icon">
          <AiFillCaretDown />
        </span>
      </OrientationName>
      <OrientationMenu className={cn({ orientationToggle })}>
        <OrientationFilterContent />
      </OrientationMenu>
    </Container>
  );
}

const Container = styled.div`

`;
const OrientationName = styled.p`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: #767676;
  fill: #767676;
  transition: 0.3s;
  &:hover{
    color: #111;
    fill: #111;
  }
  .icon{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`;
const OrientationMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  display: none;
  &.orientationToggle{
    display: block;
  }
`;

export default OrientationFilter;
