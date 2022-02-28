import React from 'react';
import styled from 'styled-components';

import TopicsDetailContainer from '../views/topics/containers/TopicsDetailContainer';
import { ContentContainer } from '../views/shared/components/Layout/Layout.Styled';

function TopicsDetail() {
  return (
    <Container>
      <ContentContainer>
        <TopicsDetailContainer />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`

`;

export default TopicsDetail;
