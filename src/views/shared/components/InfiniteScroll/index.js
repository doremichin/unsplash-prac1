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
      <Sentinel ref={sentinelRef}>
        <img src="https://t1.daumcdn.net/cfile/tistory/184F8A4E4E55932B06" alt="loading" />
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
  img{
    width: 30px;
    height: 30px;
  }
`;
export default InfiniteScroll;
