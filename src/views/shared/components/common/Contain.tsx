import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  children : JSX.Element
  onClickOut() : void
}

function Contain({ children, onClickOut } :Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e : any) => {
      if (ref.current) {
        const isContain = ref.current.contains(e?.target);
        if (!isContain) {
          onClickOut();
        }
      }
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
  return (
    <Container ref={ref}>
      {children}
    </Container>
  );
}

const Container = styled.div`

`;

export default Contain;
