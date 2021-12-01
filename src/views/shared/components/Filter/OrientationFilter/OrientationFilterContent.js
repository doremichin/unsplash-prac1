import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

const OrientationFilterContent = ({ isMobile }) => {
  const { query } = useParams();
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });
  return (
    <Container className={cn({ isMobile })}>
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
    </Container>
  );
};

const Container = styled.div`

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
  :not(.isMobile) &:hover {
    background-color: #efefef;
    color: #000;
  }
`;
export default OrientationFilterContent;
