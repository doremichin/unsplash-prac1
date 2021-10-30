import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useIntersection } from '../../../../hooks/useIntersection';

const InfiniteScroll = ({ children, next }) => {
  const [isInView, sentinelRef] = useIntersection();

  useEffect(() => {
    if (isInView) {
      next();
    }
  }, [isInView]);
  return (
    <Container>
      {children}
      <Sentinel ref={sentinelRef} />
    </Container>
  );
};

const Container = styled.div`

`;
const Sentinel = styled.div`
  height: 100px;
  background: #18f;
`;
export default InfiniteScroll;
