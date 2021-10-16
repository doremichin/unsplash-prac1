import React from 'react';
import styled from 'styled-components';

import TopicsContainer from '../views/topics/containers/TopicsContainer';
import { ContentContainer } from '../views/shared/components/Layout/Layout.Styled';

const Topics = () => (
  <Container>
    <ContentContainer>
      <TopicsContainer />
    </ContentContainer>
  </Container>
);

const Container = styled.div`

`;

export default Topics;
