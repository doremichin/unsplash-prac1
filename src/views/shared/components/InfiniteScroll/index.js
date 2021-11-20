import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
      <Sentinel ref={sentinelRef}>
        <AiOutlineLoading3Quarters />
      </Sentinel>
    </Container>
  );
};

const Container = styled.div`

`;
const Sentinel = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default InfiniteScroll;
