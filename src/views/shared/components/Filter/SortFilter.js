import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

const SortFilter = ({ clickSort, sortToggle }) => {
  const { query } = useParams();
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <Sort onClick={clickSort}>
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
        <SortButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, order_by: undefined })}`}>
          Relevance
        </SortButton>
        <SortButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, order_by: 'latest' })}`}>
          Newest
        </SortButton>
      </SortMenu>
    </Sort>
  );
};

const Sort = styled.div`
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;
const SortName = styled.div`
  display: flex;
  align-items: center;
  fill: #767676;
  color: #767676;
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
const SortButton = styled(Link)`
  padding: 10px 20px;
  font-size: 14px;
  color: #767676;
  &:hover {
    background-color: #efefef;
    color: #000;
  }
`;
export default SortFilter;
