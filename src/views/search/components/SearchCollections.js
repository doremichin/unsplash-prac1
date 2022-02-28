import React from 'react';
import styled from 'styled-components';

import GridList from '../../shared/components/List/GridList';
import CollectionItem from '../../shared/components/Item/CollectionItem';

function SearchCollections({ data }) {
  const renderCollectionItem = (item) => <CollectionItem item={item} />;
  if (!data) return '...loading';

  return (
    <Container>
      <GridList
        data={data}
        renderItem={renderCollectionItem}
      />
    </Container>
  );
}

const Container = styled.div`

`;

export default SearchCollections;
