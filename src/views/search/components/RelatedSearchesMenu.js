import React from 'react';
import styled from 'styled-components';

import ScrollMenu from '../../shared/components/ScrollMenu';

const RelatedSearchesMenu = ({ data }) => {
  const renderItem = (item) => <MenuItem>{item.title}</MenuItem>;
  return (
    <Container>
      <ScrollMenu data={data} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`
  margin: 32px 0 72px;
`;
const MenuItem = styled.div`
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
`;
export default RelatedSearchesMenu;
