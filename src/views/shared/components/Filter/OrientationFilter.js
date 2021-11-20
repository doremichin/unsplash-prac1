import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

const OrientationFilter = ({ clickOrientation, orientationToggle }) => {
  const { query } = useParams();
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <Orientation onClick={clickOrientation}>
      <OrientationName>
        { queryString.orientation || 'Any orientation'}
        <span className="icon">
          <AiFillCaretDown />
        </span>
      </OrientationName>
      <OrientationMenu className={cn({ orientationToggle })}>
        <OrientationButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, orientation: undefined })}`}>Any orientation</OrientationButton>
        <OrientationButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, orientation: 'landscape' })}`}>
          <div className="landscapeIcon" />
          landscape
        </OrientationButton>
        <OrientationButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, orientation: 'portrait' })}`}>
          <div className="portraitIcon" />
          portrait
        </OrientationButton>
        <OrientationButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, orientation: 'squarish' })}`}>
          <div className="squareIcon" />
          square
        </OrientationButton>
      </OrientationMenu>
    </Orientation>
  );
};

const Orientation = styled.div`
  cursor: pointer;
  position: relative;
`;
const OrientationName = styled.p`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: #767676;
  fill: #767676;
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
const OrientationButton = styled(Link)`
  width: 160px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #767676;
  text-transform: capitalize;
  transition: 0.3s;
  .landscapeIcon, .portraitIcon, .squareIcon {
    border: 1px solid rgb(177, 177, 177);
    background: #e4e4e4;
    margin-right: 10px;
  }
  .landscapeIcon {
    width: 18px;
    height: 12px;
  }
  .portraitIcon {
    width: 12px;
    height: 18px;
  }
  .squareIcon {
    width: 18px;
    height: 18px;
  }
  &:hover {
    background-color: #efefef;
    color: #000;
  }
`;
export default OrientationFilter;
