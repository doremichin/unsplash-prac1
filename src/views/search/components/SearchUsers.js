import React from 'react';
import styled from 'styled-components';

import GridList from '../../shared/components/List/GridList';
import UsersItem from '../../shared/components/Item/UsersItem';

const SearchUsers = ({ data }) => {
  const renderUsersItem = (item) => <UsersItem item={item} />;
  if (!data) return '...loading';

  return (
    <Container>
      <GridList
        data={data}
        renderItem={renderUsersItem}
      />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchUsers;
