import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchBox from '../../shared/components/SearchBox';

const SearchBoxContainer = ({ shape }) => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    history.push(`/search/photos/${query}`);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <SearchBox
        shape={shape}
        value={query}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

export default SearchBoxContainer;
