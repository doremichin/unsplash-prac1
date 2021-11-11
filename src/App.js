import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Routes from './Routes';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/Header/Header';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    // history.listen((location, action) => {
    //   if (action === 'PUSH') {
    //     window.scrollTo(0, 0);
    //   }
    // });
  }, []);
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default App;
