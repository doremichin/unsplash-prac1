import React from 'react';
import styled from 'styled-components';

import TopicsDetailContainer from '../views/topics/containers/TopicsDetailContainer';
import { ContentContainer } from '../views/shared/components/Layout/Layout.Styled';

const TopicsDetail = () => (
  <Container>
    <ContentContainer>
      <TopicsDetailContainer />
    </ContentContainer>
  </Container>
);

const Container = styled.div`

`;

export default TopicsDetail;
