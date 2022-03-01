import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

import SortFilterContent from './SortFilterContent';

function SortFilter({ sortToggle }) {
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <Container>
      <SortName>
        Sort by&nbsp;
        <span>
          {
            queryString.order_by || 'Relevance'
          }
        </span>
        <span className="icon">
          <AiFillCaretDown />
        </span>
      </SortName>
      <SortMenu className={cn({ sortToggle })}>
        <SortFilterContent />
      </SortMenu>
    </Container>
  );
}

const Container = styled.div`

`;
const SortName = styled.div`
  display: flex;
  align-items: center;
  fill: #767676;
  color: #767676;
  transition: 0.3s;
  &:hover{
    color: #111;
    fill : #111;
  }
  span{
    text-transform: capitalize;
  }
  .icon{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`;
const SortMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  display: none;
  flex-direction: column;
  &.sortToggle{
    display: flex;
  }
`;

export default SortFilter;
