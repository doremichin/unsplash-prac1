import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ScrollMenu from '../../shared/components/ScrollMenu';
import { IRelatedSearches } from '../../../_interfaces/interface.search';

interface Props {
    data : IRelatedSearches[]
}
function RelatedSearchesMenu({ data } : Props) {
  const renderItem = (item : IRelatedSearches) => <MenuItem to={`/search/photos/${item.title}`} key={item.title}>{item.title}</MenuItem>;
  return (
    <Container>
      <ScrollMenu data={data} renderItem={renderItem} />
    </Container>
  );
}

const Container = styled.div`
  margin: 32px 0 72px;
`;
const MenuItem = styled(Link)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  white-space: nowrap;
  padding: 0 10px;
  width: 143px;
  height: 40px;
  margin-right: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #767676;
  text-transform: capitalize;
  transition: 0.4s;
  &:hover{
    color: #111;
    border: 1px solid #111;
  }
`;
export default RelatedSearchesMenu;
