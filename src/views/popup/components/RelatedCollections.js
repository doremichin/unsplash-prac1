import React from 'react';
import styled from 'styled-components';

import CollectionItem from '../../shared/components/Item/CollectionItem';
import GridList from '../../shared/components/List/GridList';

const RelatedCollections = ({ collection }) => {
  const renderItem = (item) => <CollectionItem item={item} />;

  return (
    <Container>
      <h4>Related collections</h4>
      <Content>
        <GridList data={collection} renderItem={renderItem} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  h4{
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
  }
`;
const Content = styled.div`
  margin: 0 -10px;
`;

export default RelatedCollections;
