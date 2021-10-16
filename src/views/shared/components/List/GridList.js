import React from 'react';
import styled from 'styled-components';

const GridList = ({ data, renderItem }) => (
  <Container>
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

const Container = styled.div`
  padding: 0 010px;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px
`;
GridList.defaultProps = {
  data: [],
  renderItem: () => {},
};
export default GridList;
