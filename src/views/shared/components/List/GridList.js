import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

const GridList = ({ data, renderItem }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <Container className={cn({ isMobile, isTablet })}>
      <Row>
        {
          data.map((item, index) => (
            <Col key={item.id || index}>
              {renderItem(item)}
            </Col>
          ))
        }
      </Row>
    </Container>

  );
};

const Container = styled.div`
  padding: 0 010px;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  .isMobile & {
    flex-direction: column;
  }
`;
const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
  .isTablet & {
    width: 50%;
  }
  .isMobile & {
    width: 100%;
  }
`;
GridList.defaultProps = {
  data: [],
  renderItem: () => {},
};
export default GridList;
