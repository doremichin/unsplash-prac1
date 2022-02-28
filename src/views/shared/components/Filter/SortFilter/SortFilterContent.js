import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

function SortFilterContent({ isMobile }) {
  const { query } = useParams();
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });
  return (
    <Container className={cn({ isMobile })}>
      <SortButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, order_by: undefined })}`}>
        Relevance
      </SortButton>
      <SortButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, order_by: 'latest' })}`}>
        Newest
      </SortButton>
    </Container>
  );
}

const Container = styled.div`

`;
const SortButton = styled(Link)`
  display: block;
  padding: 10px 20px;
  font-size: 14px;
  color: #767676;
  transition: 0.3s;
  :not(.isMobile) &:hover {
    background-color: #efefef;
    color: #000;
  }
  .isMobile &{
    padding: 10px 30px;
  }

`;
export default SortFilterContent;
